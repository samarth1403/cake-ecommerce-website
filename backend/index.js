import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import dbconnect from "./Config/dbconnect.js";
import authRouter from "./Routes/authRoute.js";
import { errorHandler, notFound } from "./Middlewares/errorHandler.js";
import productRouter from "./Routes/productRoute.js";
import blogRouter from "./Routes/blogRoute.js";
import prodCategoryRouter from "./Routes/prodCategoryRoute.js";
import blogCategoryRouter from "./Routes/blogCategoryRoute.js";
import occasionRouter from "./Routes/occasionRoute.js";
import couponRouter from "./Routes/couponRoute.js";
import colorCategoryRouter from "./Routes/colorCategoryRoute.js";
import enquiryRouter from "./Routes/enquiryRoute.js";
import orderRouter from "./Routes/orderRoute.js";
import uploadRouter from "./Routes/uploadRoute.js";

const app = express();

//dotenv
dotenv.config();

//bodyparser Setup
app.use(bodyparser.json({limit:'30mb',extended:true}));
app.use(bodyparser.urlencoded({limit:'30mb',extended:true}));

//cors-setup
app.use(cors());

//For refreshing the token 
app.use(cookieParser());

//Using Morgan 
app.use(morgan('dev'));

const PORT = process.env.PORT;

//DB Connection
dbconnect();

app.use('/api/user',authRouter);
app.use('/api/product',productRouter);
app.use('/api/blog',blogRouter);
app.use("/api/prodCategory", prodCategoryRouter);
app.use("/api/blogCategory",blogCategoryRouter);
app.use("/api/occasion",occasionRouter);
app.use("/api/coupon",couponRouter);
app.use("/api/colorCategory",colorCategoryRouter);
app.use("/api/enquiry",enquiryRouter);
app.use("/api/order",orderRouter);
app.use("/api/upload",uploadRouter);

//Using Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is Running at PORT : ${PORT}`);
})
