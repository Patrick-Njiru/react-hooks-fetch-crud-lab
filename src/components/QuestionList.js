import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDelete}) {
  const questionItems = questions.map(questionObj =>  (
  <QuestionItem 
  key={questionObj.id} 
  onDelete={onDelete} 
  question={questionObj} 
  />))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> {questionItems} </ul>
    </section>
  );
}

export default QuestionList;
