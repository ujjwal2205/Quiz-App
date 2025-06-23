import quizId from "../models/QuizData.js";
import quizData  from "../../frontend/src/assets/assets.js";
const addQuizData = async (req, res) => {
try {
    await quizId.insertMany(quizData);
    res.json({success:true,message:"Quiz Id Created"})
} catch (error) {
    console.error("Error adding quiz data:", error);
    res.json({success:false,message:"Quiz Id not created"})
}
};
const displayQuizData = async (req, res) => {
    try {
      const quizzes = await quizId.find({});
      res.json({ success: true, data: quizzes });
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      res.json({ success: false, message: "Quiz Data not shown" });
    }
  };
export {addQuizData,displayQuizData}
