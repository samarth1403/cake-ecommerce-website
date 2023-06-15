import generateToken from "../Config/jwtToken.js";
import { generateRefreshToken } from "../Config/refreshToken.js";
import userModel from "../Models/userModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";
import jwt from 'jsonwebtoken';

//Create A User
export const createUserController = async(req,res) => {
    const {email} = req.body;

    const findEmail = await userModel.findOne({email:email});

    if(!findEmail){
        //Create New User
        const newUser = await userModel.create(req.body);
        res.json(newUser);
    }
    else{
        //User Already Exists
        // res.json({ message: "User Already Exists",success:false});//This will not allow the app to crash
        throw new Error("User Already Exists");//This will directly crash the app
    }
}

//Login A User
export const loginUserController = async(req , res) => {
    const {email , password} = req.body;
    
    //check wheather user exists or not
    const foundUser = await userModel.findOne({email});

    //Refresh Token 
    const refreshToken = await generateRefreshToken(foundUser?._id);
    const updateUser = await userModel.findByIdAndUpdate(
      foundUser?._id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie('refreshToken',refreshToken,{httpOnly:true,maxAge:72*60*60*1000})

    if(foundUser && await foundUser.isPasswordMatched(password)){
        res.json({
          _id : foundUser?._id,
          firstName : foundUser?.firstName,
          lastName : foundUser?.lastName,
          email : foundUser?.email,
          mobile : foundUser?.mobile,
          Token : generateToken(foundUser?._id),
        });
    }
    else{
        throw new Error("Invalid Credentials");
    }
}

//Refresh Token handler
export const getRefreshTokenController = async(req , res) => {
    const cookie = req.cookies;
    if(!cookie?.refreshToken){
        throw new Error("Refresh Token is not present in Cookie");
    }
    const refreshToken = cookie.refreshToken;
    const foundUser = await userModel.findOne({refreshToken});
    if(!foundUser){
        throw new Error("Refresh Token is not present in DB or Not matched");
    }
    //If we found the user then we will verify his refresh token
    jwt.verify(refreshToken , process.env.JWT_SECRET_KEY , (err , decoded) => {
        if(err || foundUser.id !== decoded.id){
            throw new Error("There is something wrong with this Refresh Tokem");
        }
        const accessToken = generateToken(foundUser?._id);
        res.json({accessToken})
    })  
}

//Logout A User
export const logoutUserController = async(req , res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("Refresh Token is not present in Cookie");
  }
  const refreshToken = cookie.refreshToken;
  const foundUser = await userModel.findOne({ refreshToken });

  if (!foundUser) {
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });
    return res.sendStatus(204); //Forbidden
  }
  await userModel.findOneAndUpdate({refreshToken:refreshToken}, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", { httpOnly: true, secure: true, });
  return res.sendStatus(204); //Forbidden
}

//Get All Users
export const getAllUsersController = async(req , res) => {
    try {
        const allUsers = await userModel.find();
        res.json(allUsers);
    } catch (error) {
        throw new Error(error);
    }
}

//Fetch A Single User
export const getAUserController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const user = await userModel.findById(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
}

//Delete A Single User
export const deleteAUserController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const user = await userModel.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
}

//Update A User
export const updateAUserController = async(req , res) => {
    const {_id} = req.user;
    validateMongodbId(_id);
    try {
        const updatedUser = await userModel.findByIdAndUpdate(_id
            ,{
            firstName:req?.body?.firstName,
            lastName:req?.body?.lastName,
            email:req?.body?.email,
            mobile:req?.body?.mobile,
            },
            {
                new : true,
            }
        );
        res.json(updatedUser);

    } catch (error) {
        throw new Error(error);
    }
}

//Block a User (Only admin can block a user)
export const blockAUserController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const blockUser = await userModel.findByIdAndUpdate(id,{
            isBlocked:true
        },{new:true});
        res.json(blockUser);
    } catch (error) {
        throw new Error(error);
    }
}

//unblock a User (Only admin can unblock a user)
export const unblockAUserController = async(req , res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
      const unblockUser = await userModel.findByIdAndUpdate(
        id,
        {
          isBlocked: false,
        },
        { new: true }
      );
      res.json(unblockUser);
    } catch (error) {
      throw new Error(error);
    }
}

//Updating Password
export const changePasswordController = async (req , res) => {
    const {_id} = req.user;
    const {password} = req.body;
    validateMongodbId(_id);
    const user = await userModel.findById(_id);

    if(password){
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    }
    else{
        res.json(user);
    }
}