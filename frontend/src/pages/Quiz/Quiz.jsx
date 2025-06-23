import React, { useState,useContext,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Quiz.css';
import axios from "axios";
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const Quiz = ({userName,AvailableQuizes}) => {
  const { id } = useParams();
  const{url}=useContext(StoreContext);
  const[questionsD,setQuestions]=useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [textInput, setTextInput] = useState('');
  const [multipleAnswers, setMultipleAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [quizCompleted,setQuizCompleted]=useState(false);
  useEffect(()=>{
    const fetchQuestions=async()=>{
      try{
        const res=await axios.get(`${url}/api/questionsRouter/questions`);
        if(res.data.success){
          setQuestions(res.data.data);
        }
        else{
          console.error("Failed to fetch quiz question:", res.data.message);
        }
      }
      catch (error) {
        console.error("Error while fetching quiz question:", error);
      }
    }
    fetchQuestions();
  },[url]);
  
  const quizQuestions = questionsD.find(q => q.quiz_id == parseInt(id));
  
  if (!quizQuestions) return <div>Quiz not found</div>;
  

  const currentQuestion = quizQuestions.questions[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleMultipleQuestion = (answer) => {
    setMultipleAnswers((prev) =>
      prev.includes(answer)
        ? prev.filter((item) => item !== answer)
        : [...prev, answer]
    );
  };

  const handleSubmit = () => {
    if(currentQuestion.type==='boolean'){
      if(textInput.trim().toLowerCase()!='false' && textInput.trim().toLowerCase()!='true'){
        alert('Please Enter True or False');
        setTextInput('');
        return;
      }
    }
    setIsAnswered(true);
    setDisableSubmit(true);

    let isCorrect = false;
    let correctAnswers;

    if (currentQuestion.type === 'boolean') {
      const booleanCorrectAnswer = currentQuestion.correctAnswer[0].trim().toLowerCase();
      isCorrect = booleanCorrectAnswer === textInput.trim().toLowerCase();
    } else if (currentQuestion.type === 'single' || currentQuestion.type === 'multiple') {
      correctAnswers = currentQuestion.correctAnswer;

      if (currentQuestion.type === 'multiple') {
        isCorrect =
          multipleAnswers.length === correctAnswers.length &&
          multipleAnswers.every((ans) => correctAnswers.includes(ans));
      } else if (currentQuestion.type === 'single') {
        isCorrect = correctAnswers.includes(selectedAnswer);
      }
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    const updatedScore = isCorrect ? score + 1 : score;
    if(quizCompleted){
      handleLeaderBoard(updatedScore);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex == quizQuestions.questions.length - 2) {
      setQuizCompleted(true);
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedAnswer('');
    setMultipleAnswers([]);
    setTextInput('');
    setIsAnswered(false);
    setDisableSubmit(false);
  };
  const handleLeaderBoard = async (updatedScore) => {
    try {
      const res = await axios.post(`${url}/api/admin/addToLeaderboard`, {
        name: userName,
        score: updatedScore,
        quizName: AvailableQuizes.name
      });
  
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Error");
    }
  };
  
  const progress = ((currentQuestionIndex + 1) / quizQuestions.questions.length) * 100;

  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="quiz-page-container">
        <h2 className="quiz-page-title">Question {currentQuestionIndex + 1}</h2>

        <div className="quiz-question-card">
          <p className="quiz-question-text">{currentQuestion.question}</p>

          <div className="quiz-options">
            {currentQuestion.type === 'boolean' && (
              <div className="quiz-option-item">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  disabled={isAnswered}
                  placeholder="Type your answer"
                  className={`quiz-option-input ${
                    isAnswered
                      ? currentQuestion.correctAnswer[0].trim().toLowerCase() ===
                        textInput.trim().toLowerCase()
                        ? 'boolean-correct'
                        : 'boolean-wrong'
                      : ''
                  }`}
                />
              </div>
            )}

            {(currentQuestion.type === 'single' || currentQuestion.type === 'multiple') &&
              currentQuestion.options.map((option, index) => {
                const isCorrect = currentQuestion.correctAnswer.includes(option);
                const isSelected =
                  currentQuestion.type === 'multiple'
                    ? multipleAnswers.includes(option)
                    : selectedAnswer === option;

                const labelClass =
                  isAnswered && isCorrect
                    ? 'correct-answer'
                    : isAnswered && isSelected && !isCorrect
                    ? 'wrong-answer'
                    : '';

                return (
                  <div key={index} className="quiz-option-item">
                    <input
                      type={currentQuestion.type === 'multiple' ? 'checkbox' : 'radio'}
                      name="answer"
                      checked={isSelected}
                      onChange={() =>
                        currentQuestion.type === 'multiple'
                          ? handleMultipleQuestion(option)
                          : handleAnswerSelection(option)
                      }
                      className="quiz-option-input"
                      disabled={isAnswered}
                    />
                    <label className={`quiz-option-label ${labelClass}`}>
                      {option}
                    </label>
                  </div>
                );
              })}
          </div>

          <button
            onClick={handleSubmit}
            disabled={
              disableSubmit ||
              (currentQuestion.type === 'multiple' && multipleAnswers.length === 0) ||
              (currentQuestion.type === 'single' && !selectedAnswer) ||
              (currentQuestion.type === 'boolean' && textInput.trim() === '')
            }
            className="quiz-submit-button"
          >
            Submit Answer
          </button>
        </div>

        {isAnswered && currentQuestionIndex < quizQuestions.questions.length - 1 && (
          <button onClick={handleNextQuestion} className="quiz-next-button">
            Next Question
          </button>
        )}

        {currentQuestionIndex === quizQuestions.questions.length - 1 && isAnswered && (
          <div className="quiz-completion-message">
            <h3>You've completed the quiz!</h3>
            <h3>
              Your score: {score} / {quizQuestions.questions.length}
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
