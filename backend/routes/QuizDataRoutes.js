import express from 'express';
import {addQuizData, displayQuizData} from '../controllers/QuizDataController.js';

const QuizDataRouter=express.Router();
QuizDataRouter.post("/Id",addQuizData);
QuizDataRouter.get("/AvailableQuizes",displayQuizData);
export default QuizDataRouter;