import React from 'react'
import { useState } from 'react'

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
    <form onSubmit={onSubmit}>
        <div className='forma-neka'>
            <label>Todo</label>
            <input type="text" placeholder='Add Todo' value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className='forma-neka'>
            <label>Day & Time</label>
            <input type="text" placeholder='Add Day & Time' value={day} onChange={(e)=> setDay(e.target.value)}/>
        </div>

        <input type="submit" value="Save Todo" />
       
    </form>
  )
}

export default AddTodo