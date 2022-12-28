import React from 'react';
import {FaTimes} from 'react-icons/fa';
import './Todo.css';
const Todo = (props) => {
  return (
    <div className='all-todo'>
      <div className='todos'>
        <div className='wrap'>
        <input className='chk-complete' type="checkbox" id="completed" checked={props.todo.completed} onChange={() => props.toggleComplete(props.todo.id)}/>
        <h3 className={`todo-text ${props.todo.completed ? 'strike' : ''}`}>{props.todo.text} </h3>
        </div>
        <FaTimes className='delete-todo' size={40} onClick={() => props.onDelete(props.todo.id)} /> 
        </div>
    </div>
  )
}

export default Todo;