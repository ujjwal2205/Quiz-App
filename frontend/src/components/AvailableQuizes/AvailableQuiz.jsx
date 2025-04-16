import React from 'react';
import './AvailableQuiz.css';
import quizData from '../../assets/assets';

const AvailableQuiz = () => {
  return (
    <div className="available-quiz-container">
      <h2>Available Quizzes</h2>
      <ul>
        {quizData.map((quiz) => (
          <li className="quiz-card">
            <div className="Quiz-Name">{quiz.name}</div>
            <div className="Quiz-TotalQuestions">
              {quiz.totalQuestions} questions
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableQuiz;
