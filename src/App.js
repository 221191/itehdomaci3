import './App.css';
import TodosPage from './components/pages/TodosPage'
import AddTodoPage from './components/pages/AddTodoPage'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Gym",
      completed: true
    },
    {
      id: 2,
      text: "Meeting for work",
      completed: false
    },
    {
      id: 3,
      text: "Shopping",
      completed: false
    },
  ]);


  const toggleComplete = (id) =>{
    setTodos(prev =>
      prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  }

  // Dodavanje todo
  const addTodo = (todo) =>{
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTodo = {id, completed: false, ...todo};
    setTodos([...todos, newTodo]);
  }

  // Brisanje todo
  const deleteTodo = (id) =>{
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
  }

  return (
    <div className="App">

    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/">
        <Route index element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodosPage todos={todos} onDelete={deleteTodo} toggleComplete={toggleComplete}/>} />
          <Route path="/addtodo" element={<AddTodoPage onAdd={addTodo} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
