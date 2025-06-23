import express from "express";
import { addQuizQuestions,displayQuizQuestions} from "../controllers/QuestionsController.js";

const QuizQuestionsRouter=express.Router()
QuizQuestionsRouter.post("/addquestions",addQuizQuestions);
QuizQuestionsRouter.get("/questions",displayQuizQuestions);
export default QuizQuestionsRouter;