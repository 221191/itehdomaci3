import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={props.onDelete}/>
      ))}
    </div>
  );
};

export default Todos;
