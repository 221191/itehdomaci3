import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Todo = (props) => {
  return (
    <div>
        <h3>{props.todo.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => props.onDelete(props.todo.id)} /> </h3>
        <p>{props.todo.day}</p>
    </div>
  )
}

export default Todo;