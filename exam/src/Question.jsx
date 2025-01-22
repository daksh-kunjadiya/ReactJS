import React, { useState, useEffect } from "react";
import API from "./config/api";

const Questions = () => {
  const [data, setData] = useState({
    question: "",
    answer: "",
  });
  const [questions, setQuestions] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const createQuestion = async () => {
    const res = await API.post(
      "http://localhost:5000/api/v1/question/addQuestion",
      data
    );
    GetQuestions();
  };
  const GetQuestions = async () => {
    const res = await API.get(
      "http://localhost:5000/api/v1/question/getAllQuestions"
    );
    setQuestions(res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createQuestion();
    setData({ question: "", answer: "" });
  };
  useEffect(() => {
    GetQuestions();
  }, []);
  return (
    <div>
      <div>
        <h2>Add Question</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="question"
              placeholder="Enter question"
              value={data.question}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="answer"
              placeholder="Enter answer"
              value={data.answer}
              onChange={handleInput}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h3>Questions List</h3>
          <div>
            {questions.map((que) => (
              <div key={que.id}>
                <h5>Question: {que.question}</h5>
                <p>
                  <strong>Answer:</strong> {que.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
