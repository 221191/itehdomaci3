import React from 'react'
import { useState } from 'react'
import './AddTodo.css';

const AddTodo = (props) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!text){
            alert('Add todo');
            return;
        }

        props.onAdd({text, day});
        setText('');
        setDay('');
    }
    return (
    <form className='my-form' onSubmit={onSubmit}>
        <div className='form'>
            <label>Todo</label>
            <input type="text" placeholder='Add Todo' value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className='form'>
            <label>Day & Time</label>
            <input type="text" placeholder='Add Day & Time' value={day} onChange={(e)=> setDay(e.target.value)}/>
        </div>

        <input className="add-btn" type="submit" value="Save Todo" />
       
    </form>
  )
}

export default AddTodo