import React from 'react'
import AddTodo from '../AddTodo'

const AddTodoPage = (props) => {
  return (
    <AddTodo onAdd={props.onAdd}/>
  )
}

export default AddTodoPage