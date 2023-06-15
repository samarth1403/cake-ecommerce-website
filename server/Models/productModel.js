import mongoose from 'mongoose';

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    images:{
        type:Array,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    price:{
        type:Number,
        required:true,
    },
    weight:{
        type:String,
        default:"500 gm",
        required:true,
    },
    ratings:[
        {
            star : Number,
            postedBy : {type:mongoose.Schema.Types.ObjectId},
        }
    ],
    isVeg:{
        type:Boolean,
        default:true,
        required:true,
    },
    shape:{
        type:String,
        default:"circular",
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    sold:{
        type:Number,
        default:0,
        //select:false,//hidding permanantly from user
    },
    category:{
        type:String,
        required:true,
    },
},{timestamps:true});

//Export the model
const productModel = mongoose.model('Product', productSchema);
export default productModel;