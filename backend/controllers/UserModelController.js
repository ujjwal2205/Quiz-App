import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"

//login user
const loginUser=async(req,res)=>{
const {email,password,role}=req.body;
try{
    const user=await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"User doesn't exist"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
    return res.json({success:false,message:"Invalid credentials"})
    }
    const token = createToken(user._id,role);
    res.json({success:true,token,message:"Logged In",name:user.fullName});
}
catch(error){
console.log(error);
res.json({success:false,message:"Error"})
}
}
const createToken=(id,role)=>{
    return jwt.sign({id,role},process.env.JWT_SECRET)
}
//register user
const registerUser=async(req,res)=>{
   const {fullName,password,email,confirmPassword}=req.body;
   try{
    // checking is user already exists
   const exists=await userModel.findOne({email});
   if(exists){
    return res.json({success:false,message:"User Already Exists"})
   }
   // validating email format and strong password  
   if(!validator.isEmail(email)){
    return res.json({success:false,message:"Please Enter a valid email"});
   }
   if(password.length<8){
    return res.json({success:false,message:"Please enter a strong password"});
   }
   if(password!==confirmPassword){
    return res.json({success:false,message:"Invalid credentials"})
   }
   // hashing user password
   const salt=await bcrypt.genSalt(10)
   const hashedPassword=await bcrypt.hash(password,salt);
   const newUser=new userModel({
    fullName:fullName,
    email:email,
    password:hashedPassword,
    role:'user'
   });
   const user= await newUser.save();
   const token=createToken(user._id);
   res.json({success:true,token,message:"Signed In"})
   }
   catch(error){
   console.log(error);
   res.json({success:false,message:"Error"})
   }
}
export {loginUser,registerUser};