import React, {useState, useRef} from "react";
import QuizStyle from "../styles/Quiz.module.css";

export default function Quiz({children, title}) {
  const ref = useRef();
  const questionContentRef = useRef();
  const [questionContentIsVisible, showQuestionContent] = useState(false);
  const [answerShown, setAnswerShown] = useState(false);
  const handleToggle = () => {
    setAnswerShown((prev) => !prev);
  };
  const questionContentToggle = () => {
    showQuestionContent((prev) => !prev);
  };
  const Question = () => {
    return <div>{children[1]}</div>;
  };
  return (
    <div className={QuizStyle.question}>
      <p onClick={questionContentToggle} ref={questionContentRef}>
				Exercise: {title}
      </p>
      <div
        className={
          questionContentIsVisible
            ? QuizStyle.showQuestionContent
            : QuizStyle.questionContent
        }>
        <div className={QuizStyle.questionPrompt}>{children[0]}</div>
        <div className={answerShown ? QuizStyle.revealAnswers : QuizStyle.hideAnswers}>
          <Question />
        </div>
        <button onClick={handleToggle} ref={ref} className={QuizStyle.answerButton}>
          {answerShown ? "Hide Answers" : "Show Answers"}
        </button>
      </div>
    </div>
  );
}
