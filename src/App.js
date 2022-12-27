import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import TodosPage from './components/pages/TodosPage'
import AddTodoPage from './components/pages/AddTodoPage'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Gym",
      day: "Dec 27th at 2:30pm",
    },
    {
      id: 2,
      text: "Meeting for work",
      day: "Dec 28th at 1:30pm",
    },
    {
      id: 3,
      text: "Shopping",
      day: "Dec 27th at 2:30pm",
    },
  ]);

  // Dodavanje todo
  const addTodo = (todo) =>{
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTodo = {id, ...todo};
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
          <Route path="/todos" element={<TodosPage todos={todos} onDelete={deleteTodo}/>} />
          <Route path="/addtodo" element={<AddTodoPage onAdd={addTodo} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
