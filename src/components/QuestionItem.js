import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ))

  function handleDelete() {

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({"correctIndex": correctIndex})
    })
      .then(res => res.json())
      .then(data => console.log("DELETE success", data))
      .catch(error => console.log("Error Deleting data", error))

    onDelete(id)
  }

  function handleChange(e) {

    fetch( `http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "correctIndex": e.target.value })
    })
    .then(res => res.json())
    .then(data => console.log("Changed Answer Successfully", data))
    .catch(error => console.log(error))
    
    console.log("changed value to", e.target.value)
  }

  return (
      <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange} >{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  )
}

export default QuestionItem;
