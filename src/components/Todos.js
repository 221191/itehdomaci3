import React from "react";
import Todo from "./Todo";
import './Todos.css';
const Todos = (props) => {
  
  return (
    <div className="todos-home">
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={props.onDelete}/>
      ))}
    </div>
  );
};

export default Todos;
