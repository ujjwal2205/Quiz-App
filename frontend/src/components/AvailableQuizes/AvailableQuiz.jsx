import React, { useState, useContext, useEffect } from 'react';
import './AvailableQuiz.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const AvailableQuiz = ({ setShowLogin,setAvailableQuizes}) => {
  const [quizzes, setQuizzes] = useState([]);
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get(`${url}/api/quizId/AvailableQuizes`);
        if (res.data.success) {
          setQuizzes(res.data.data);
        } else {
          console.error("Failed to fetch quiz data:", res.data.message);
        }
      } catch (error) {
        console.error("Error while fetching quiz data:", error);
      }
    };
    fetchQuizzes();
  }, [url]);

  const handleQuizClick = (quizId) => {
    if (localStorage.getItem("token") ){
      setAvailableQuizes(quizzes[quizId-1])
      navigate(`/quiz/${quizId}`);
    } else {
      toast.error("Please Login/SignUp to access the quiz.");
      setShowLogin(true);  // 👈 Show login modal
    }
  };

  return (
    <div className="available-quiz-container">
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="quiz-card" onClick={() => handleQuizClick(quiz.id)}>
            <div className="quiz-link">
              <div className="Quiz-Name">{quiz.name}</div>
              <div className="Quiz-TotalQuestions">
                {quiz.totalQuestions} questions
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableQuiz;
