import mongoose, { isValidObjectId } from "mongoose";
import bcrypt from "bcrypt";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default : "user",
  },
  cart: {
    type:Array,
    default:[],
  },
  address: [
    { type : mongoose.Schema.Types.ObjectId , ref : "Address"},
  ],
  isBlocked: {
    type:Boolean,
    default:false,
  },
  refreshToken:{
    type:String,
  }
},{
  timestamps:true,
});

//Encrypting the password using bcrypt
userSchema.pre("save",async function(next){
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password , salt);
})

//Matching the password when user login 
userSchema.methods.isPasswordMatched = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword , this.password);
}

//Export the model
const userModel = mongoose.model('User', userSchema);
export default userModel;