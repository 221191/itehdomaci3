import React from 'react';
import {FaTimes} from 'react-icons/fa';
import './Todo.css';
const Todo = (props) => {
  return (
    <div className='all-todo'>
      <div className='todos'>
        <h3 className='todo-text'>{props.todo.text} <FaTimes className='delete-todo' onClick={() => props.onDelete(props.todo.id)} /> </h3>
        <p className='todo-day'>{props.todo.day}</p>
        </div>
    </div>
  )
}

export default Todo;