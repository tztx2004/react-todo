import React, { Component, useState } from "react";
import "./App.css";
import List from "./components/List";

export default function App(){
  const [todoData,setTodoData] = useState([])
  const [value, setValue] = useState('')

  



  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
    // form 안에 input 전송 시 페이지 리로드 막음
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래있던 할 일에 새로운 할 일 더하기
    setTodoData(prev =>[...prev, newTodo])
    setValue("")
  };



  return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <List todoData={todoData} setTodoData={setTodoData} />

          <form style={{ display: "flex" }} onSubmit={handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야할 일을 입력하세요."
              value={value}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>
        </div>
      </div>
  )
}
