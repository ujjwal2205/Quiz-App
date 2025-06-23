import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    question: { type: String, required: true },
    options: [String],
    correctAnswer: [String],
    type: { type: String, enum: ['single', 'multiple', 'boolean'], required: true },
  });
  const topicSchema = new mongoose.Schema({
    quiz_id: Number,
    questions: [questionSchema],
  });
const questions_add= mongoose.models.quizQuestions || mongoose.model("quizQuestions",topicSchema);
export default questions_add;