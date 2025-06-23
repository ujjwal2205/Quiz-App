import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://ujjwal:ujjwal2205@cluster0.vnyjb44.mongodb.net/QUIZ-APP').then(()=>console.log("DB Connected"));
}