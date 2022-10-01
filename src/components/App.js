import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List")
  const [questions, setQuestions] = useState([])
    
  useEffect(() => {
    console.log("side effect")
    
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(data => setQuestions(data)) // data => array of question objects
      .catch(error => console.log(error))
  }, [])

  function onUpdateQuestions(question) {
    setQuestions([ ...questions, question])
  }

  function onDelete(id) {
    setQuestions(questions.filter(question => question.id !== id).map(question => question))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onUpdateQuestions={onUpdateQuestions} /> : <QuestionList onDelete={onDelete} setQuestions={setQuestions} questions={questions} />}
    </main>
  )
}

export default App;
