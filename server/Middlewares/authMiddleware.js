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
            throw new Error("Not Authorized , Token Expired , Please Login Again");
        }
    }
    else{
        throw new Error("There is no token attached to the Header");
    }
}

export const isAdminMiddleware = async (req , res , next) => {
    const {email} = req.user;
    const adminUser = await userModel.findOne({email});

    if(adminUser.role !== "admin"){
        throw new Error("You are not a Admin");
    }
    else {
        next();
    }
}
