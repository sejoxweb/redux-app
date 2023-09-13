import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "./questionsSlice";

const Questions = () => {
  const state = useSelector((state) => state);
  const questions = useSelector((state) => state.questions.data);
  const loading = useSelector((state) => state.questions.loading);
  console.log("state>>>", state);
  console.log("questions>>>", questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);
  if (loading === true) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      Questions
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
