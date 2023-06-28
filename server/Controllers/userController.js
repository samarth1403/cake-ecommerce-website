import generateToken from "../Config/jwtToken.js";
import { generateRefreshToken } from "../Config/refreshToken.js";
import userModel from "../Models/userModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendEmail } from "./emailController.js";
import cartModel from "../Models/cartModel.js";
import productModel from "../Models/productModel.js";
import couponModel from "../Models/couponModel.js";
import orderModel from "../Models/orderModel.js";
import uniqid from 'uniqid';

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

    if(foundUser && await foundUser.isPasswordMatched(password)){
        //Refresh Token 
    const refreshToken = await generateRefreshToken(foundUser?._id);
    const updateUser = await userModel.findByIdAndUpdate(
      foundUser?._id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie('refreshToken',refreshToken,{httpOnly:true,maxAge:72*60*60*1000})
    
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

//Login for Admin
export const loginAdminController = async (req, res) => {
  const { email, password } = req.body;
  try {
      //check wheather Admin exists or not
  const foundAdmin = await userModel.findOne({ email });

  if(foundAdmin.role !== "admin"){
    // throw new Error("You are not an Admin");
    res.json({ res: { message: "You are not an Admin", success: false } });
  }
  

  if (foundAdmin && (await foundAdmin.isPasswordMatched(password))) {
    //Refresh Token
  const refreshToken = await generateRefreshToken(foundAdmin?._id);
  const updateAdmin = await userModel.findByIdAndUpdate(
    foundAdmin?._id,
    { refreshToken: refreshToken },
    { new: true }
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 72 * 60 * 60 * 1000,
  });

    res.json({
      _id: foundAdmin?._id,
      firstName: foundAdmin?.firstName,
      lastName: foundAdmin?.lastName,
      email: foundAdmin?.email,
      mobile: foundAdmin?.mobile,
      Token: generateToken(foundAdmin?._id),
      res: {
        message: "You are an Admin",
        success: true,
      },
    });
  }
  } catch (error) {
    // throw new Error("You are not an Admin");
    res.json({res:{ message: "You are not an Admin", success: false }});
  }
};

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
        const allUsers = await userModel.find().populate("wishList");
        res.json({users:allUsers,res:{message:"Success",success:true}});
    } catch (error) {
        // throw new Error(error);
        res.json({
          res: { message: "Not Fetched", success: false },
        });
    }
}

//Fetch A Single User
export const getAUserController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const user = await userModel
          .findById(id)
          .populate("wishList");
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

//Generate Token when user want to reset his password and clicks on reset password after entering email in the field
export const getForgotPasswordTokenController = async(req , res) => {
    const {email} = req.body;
    const foundUser = await userModel.findOne({email});
    if(!foundUser){
        throw new Error("User not found with this Email ID");
    }
    try {
        const token = await foundUser.createPasswordResetToken();
        await foundUser.save();
        const resetURL = `Hi follow this Link to reset your password . This link is valid for 10 minutes from now . <a href=http://localhost:3001/api/user/reset-password/${token}>Click Here</a>`
        const data = {
            to : email,
            text : "Hey , User",
            subject : "Forgot password Link",
            htm : resetURL, 
        }
        sendEmail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error);
    }
}

//This will reset password when user clicks on link which is sent to him through email and enters new password
export const resetPasswordController = async (req , res) => {
    const {password} = req.body;
    const {token} = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const foundUser = await userModel.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if(!foundUser){
        throw new Error("Token Expired , Please try again Later");
    }
    foundUser.password = password;
    foundUser.passwordResetToken = undefined;
    foundUser.passwordResetExpires = undefined;
    await foundUser.save();
    res.json(foundUser);
}

//Get a wishlist
export const getWishListController = async (req , res) => {
    const {_id} = req.user;
    try {
        const foundUser = await userModel.findById(_id).populate("wishList");
        res.json(foundUser);
    } catch (error) {
        throw new Error(error);
    }
}

//Save the address
export const saveUserAddressController = async(req , res) => {
    const {_id} = req.user;
    validateMongodbId(_id);
    try {
        const updatedAddress = await userModel.findByIdAndUpdate(_id,{
            address:req?.body?.address,
        },
        {
            new : true,
        },
        )
        res.json(updatedAddress);
    } catch (error) {
        throw new Error(error);
    }
}

//Add to Cart Controller 
export const userCartController = async(req , res) => {
    const {cart} = req.body;
    const {_id} = req.user;
    validateMongodbId(_id);
    try {
        let products = [];
        const user = await userModel.findById(_id);
        //checking if user hava that product in cart
        let alreadyExistInCart = await cartModel.findOne({orderBy:user._id});
        //let alreadyExistInCart = await cartModel.deleteMany({orderBy:user._id}); Its mine
        if(alreadyExistInCart){
            //alreadyExistInCart.remove();
            alreadyExistInCart = null;
        }

        for(let i=0; i < cart.length; i++){
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;
            let getPrice = await productModel.findById(cart[i]._id).select("price").exec();
            object.price = getPrice.price;
            products.push(object);
        }

        let cartTotal = 0;
        for(let i=0; i<products.length; i++){
            cartTotal = cartTotal + products[i].price * products[i].count;
        }
        
        //Add New Cart
        let newCart = await new cartModel({
            products,
            cartTotal,
            orderBy: user?._id,
        }).save();
        res.json(newCart);

    } catch (error) {
        throw new Error(error);
    }
}

//Get A Cart Controller
export const getACartController = async(req , res) => {
    const {_id} = req.user;
    validateMongodbId(_id);
    try {
         //const cart = await cartModel.find({ orderBy: _id }.populate("products.product");Its mine
        const cart = await cartModel.findOne({orderBy:_id}).populate("products.product");
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
}

//empty the cart
export const emptyCartController = async(req , res) => {
    const {_id} = req.user;
    validateMongodbId(_id);
    try {
        const user = await userModel.findOne({_id});
        const cart = await cartModel.findOneAndRemove({orderBy:user._id});
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
}

//Applying Coupon
export const applyCouponController = async(req , res) => {
    const {_id} = req.user;
    const {couponName} = req.body;
    validateMongodbId(_id);
    try {
        const validCoupon = await couponModel.findOne({name:couponName});
        if(validCoupon === null){
            throw new Error("Invalid Coupon");
        }

        const user = await userModel.findOne({_id});
        const {products , cartTotal} = await cartModel.findOne({orderBy:user._id}).populate("products.product");

        //Finding total price after applying coupon
        let totalAfterDiscount = ( cartTotal - (cartTotal * validCoupon.discount)/100 ).toFixed(2);

        //Updating the total cost after applying coupon
        await cartModel.findOneAndUpdate({orderBy:user._id},{totalAfterDiscount},{new : true},);

        res.json(totalAfterDiscount);

    } catch (error) {
        throw new Error(error);
    }
}

//Creating an Order
export const createOrderController = async(req , res) => {
    const {COD , couponApplied} = req.body;
    const {_id} = req.user;
    validateMongodbId(_id);
    try {
        if(!COD){
            throw new Error("Create Cash order failed")
        }
        const user = await userModel.findOne({_id});
        let userCart = await cartModel.findOne({orderBy:user?._id});

        let finalAmount = 0;
        if(couponApplied && userCart.totalAfterDiscount){
            finalAmount = userCart.totalAfterDiscount;
        }
        else {
            finalAmount = userCart.cartTotal;
        }

        //Creating new Order
        let newOrder = await new orderModel({
          products: userCart.products,
          paymentIntent: {
            id: uniqid(),
            method: "COD",
            amount: finalAmount,
            status: "Cash On Delivery",
            created: Date.now(),
            currency: "usd",
          },
          orderBy: user._id,
          orderStatus: "Cash On Delivery",
        }).save();

        let update = userCart.products.map((item) => {
            return {
                updateOne : {
                    filter : { _id : item.product._id },
                    update : { $inc : { quantity : -item.count , sold : +item.count } }
                }
            }
        });
        const updated = await productModel.bulkWrite(update , {});
        res.json({message : "Success"});
        
    } catch (error) {
        throw new Error(error);
    }
}

//Getting orders
export const getOrdersController = async(req , res) => {
    const {_id} = req.user;
    validateMongodbId(_id);
    try {
        const userOrders = await orderModel.findOne({orderBy : _id}).populate('products.product').exec();
        res.json(userOrders);
    } catch (error) {
        throw new Error(error);
    }
}


//Updating order status Only admin can do this
export const updateOrderStatusController = async(req , res) => {
    const { id } = req.params;
    const {status} = req.body;
    validateMongodbId(id);
    try {
        const updateOrderStatus = await orderModel.findByIdAndUpdate(
          id,
          {
            orderStatus: status,
            paymentIntent: {
              status: status,
            },
          },
          {
            new: true,
          }
        );
        res.json(updateOrderStatus);

    } catch (error) {
        throw new Error(error);
    }
}