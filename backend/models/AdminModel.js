import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    name:{type:String,required:true},
    quizName:{type:String,required:true},
    score:{type:Number,required:true}
})
const leaderboard= mongoose.models.admin || mongoose.model("admin",adminSchema);
export default leaderboard;