import React, { useState, useEffect } from "react";
import API from "./config/api";

const Exam = () => {
  const [data, setData] = useState({
    title: "",
    marks: "",
    startingTime: "",
    endingTime: "",
  });
  const [exams, setExams] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const createExam = async () => {
    const res = await API.post(
      "http://localhost:5000/api/v1/exam/addExam",
      data
    );
    getExams();
  };
  const getExams = async () => {
    const res = await API.get("http://localhost:5000/api/v1/exam/getExam");
    setExams(res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createExam();
    setData({
      title: "",
      marks: "",
      startingTime: "",
      endingTime: "",
    });
  };
  useEffect(() => {
    getExams();
  }, []);
  return (
    <div>
      <div>
        <h2>Add Exam</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Enter exam title"
              value={data.title}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="marks"
              placeholder="Enter total marks"
              value={data.marks}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <input
              type="time"
              name="startingTime"
              value={data.startingTime}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <input
              type="time"
              name="endingTime"
              value={data.endingTime}
              onChange={handleInput}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h3>Exams List</h3>
          <ul>
            {exams.map((exam) => (
              <li key={exam.id}>
                {" "}
                <h5>{exam.title}</h5>
                <p>Marks: {exam.marks}</p>
                <p>Start Time: {exam.startingTime}</p>
                <p>End Time: {exam.endingTime}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exam;
