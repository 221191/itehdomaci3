import React from 'react'
import Header from '../Header'
import Todos from '../Todos'

const TodosPage = (props) => {
  return (
    <div>
    <Header title="To-Do List" />
     
     {props.todos.length > 0 && <Todos todos={props.todos} onDelete={props.onDelete}/>}
     {props.todos.length === 0 && <p>No Todos</p>}
    </div>
    
  )
}

export default TodosPage