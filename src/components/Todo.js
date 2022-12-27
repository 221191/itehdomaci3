import React from 'react';

const Todo = (props) => {
  console.log(props.todo);
  return (
    <div>
        <h3>{props.todo.text}</h3>
        <p>{props.todo.day}</p>
    </div>
  )
}

export default Todo;