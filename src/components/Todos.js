import React from "react";
import Todo from "./Todo";
import "./Todos.css";
import { useState } from "react";
const Todos = (props) => {
  const [show, setShow] = useState('All');

  const onChangeValue = (e) =>{
    setShow(e.target.value);
  }
  console.log(show);
  return (
    <>
      <div className="filter" >
        <div>
          <input type="radio" name="filter" id="show-all" value='All' checked={show === 'All'} onChange={onChangeValue}/>
          <label htmlFor="show-all">Show All</label>
        </div>

        <div>
          <input type="radio" name="filter" id="show-completed" value='Completed' checked={show === 'Completed'} onChange={onChangeValue}/>
          <label htmlFor="show-completed">Show Completed</label>
        </div>

        <div>
          <input type="radio" name="filter" id="show-uncompleted" value='Uncompleted' checked={show === 'Uncompleted'} onChange={onChangeValue}/>

          <label htmlFor="show-uncompleted">Show Uncompleted</label>
        </div>
      </div>

      <div className="todos-home">
        {props.todos.filter(todo => {
          // console.log(show, todo);
          if(show === 'Completed'){
            if(todo.completed === true){
              return todo;

            }
          }
          else if(show === 'Uncompleted'){
            if(todo.completed === false){
              return todo;
            }
          }
          else{
            return todo;
          }
        }).map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={props.onDelete}
            toggleComplete={props.toggleComplete}
          />
        ))}
      </div>
    </>
  );
};

export default Todos;
