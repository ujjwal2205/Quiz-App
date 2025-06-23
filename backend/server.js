import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import QuizDataRouter from "./routes/QuizDataRoutes.js";
import QuizQuestionsRouter from "./routes/QuestionsRoutes.js";
import userRouter from "./routes/userModelRoutes.js";
import 'dotenv/config'
import Adminrouter from "./routes/AdminRoutes.js";
//app config
const app=express();
const port=4000

//middleware
app.use(express.json())
app.use(cors())
connectDB();

app.use("/api/quizId",QuizDataRouter);
app.use("/api/questionsRouter",QuizQuestionsRouter);
app.use("/api/user",userRouter)
app.use("/api/admin",Adminrouter);
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
