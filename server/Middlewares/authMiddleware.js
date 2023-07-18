import jwt from 'jsonwebtoken';
import userModel from '../Models/userModel.js';

export const authMiddleware = async(req , res , next) => {
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
        try {
            if(token){
                const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
                const user = await userModel.findById(decoded.id);
                req.user = user;
                next();
            }
        } catch (error) {
            // throw new Error("Not Authorized , Token Expired , Please Login Again");
            res.json({
          res: {
            message:"Not Authorized , Token Expired , Please Login Again",
            success: false,
          },
        });
        }
    }
    else{
        // throw new Error("There is no token attached to the Header");
        res.json({
          res: {
            message: "There is no token attached to the Header",
            success: false,
          },
        });
    }
}

export const isAdminMiddleware = async (req , res , next) => {
    const {email} = req.user;
    const adminUser = await userModel.findOne({email});

    if(adminUser.role !== "admin"){
        // throw new Error("You are not a Admin");
        res.json({ res: { message: "You are not a Admin" , success : false} });
    }
    else {
        next();
    }
}
