import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    if (task === "") {
      return
    }
    const newTodo = {
      id: todoList.length,
      text: task,
    };
    todoList.push(newTodo);
    setTask("");
  }

  const deleteTodo = (event, id) => {
    event.preventDefault();
    setTodoList(todoList.filter((todo, index) => (todo.id !== id)))
  }

  return (
    <div>
      <h1>TODOリスト</h1>
      <form onSubmit={addTodo}>
        <input type='text' value={task} onChange={(event) => {setTask(event.target.value)}}/>
        <button type='submit'>追加</button>
      </form>
      <form>
        <ul>
          {
            todoList.map((todo, index) => (
              <li key={index}>{todo.text}<button onClick={(event) => deleteTodo(event, todo.id)}>削除</button></li>
            ))
          }
        </ul>
      </form>
    </div>
  );
}
