import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Gym",
      day: "Dec 27th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting for work",
      day: "Dec 28th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "Dec 27th at 2:30pm",
      reminder: true,
    },
  ]);

  return (
    <div className="App">
      <Header title="To-Do List" />
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
