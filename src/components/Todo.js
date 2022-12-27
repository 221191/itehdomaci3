import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Gym",
      day: "Dec 27th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting for work",
      day: "Dec 28th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "Dec 27th at 2:30pm",
      reminder: true,
    },
  ]);

  return (
    <div>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.text}</h3>
      ))}
    </div>
  );
};

export default Todo;
