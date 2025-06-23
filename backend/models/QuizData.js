import mongoose from "mongoose";

const quizDataSchema=new mongoose.Schema({
    id:{type:Number,required:true,unique: true},
    name:{type:String,required:true},
    totalQuestions:{type:Number,required:true}
})
const quizId= mongoose.models.quizData || mongoose.model("quizData",quizDataSchema);
export default quizId;