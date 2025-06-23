import { questions } from "../../frontend/src/assets/assets.js";
import questions_add from "../models/Questions.js";

const addQuizQuestions = async (req, res) => {
  try {
    // Step 1: Format the questions data by adding quiz_id
    const formattedQuestions = Object.keys(questions).map(quizId => ({
      quiz_id: parseInt(quizId), // Convert quizId to an integer (if required)
      questions: questions[quizId],
    }));

    // Step 2: Insert the formatted questions into the database
    await questions_add.insertMany(formattedQuestions);
    
    // Respond with success
    res.json({ success: true, message: "Quiz Questions Added Successfully" });
  } catch (error) {
    // Handle errors and respond with failure
    console.error("Error adding quiz questions:", error);
    res.json({ success: false, message: "Quiz questions not added" });
  }
};
const displayQuizQuestions=async(req,res)=>{
  try{
    const questions=await questions_add.find({});
    res.json({success:true,data:questions});
  }
    catch (error) {
      console.error("Error fetching quiz question:", error);
      res.json({ success: false, message: "Quiz Question not shown" });
    }
  };
export{addQuizQuestions,displayQuizQuestions};