import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className="App">
      <Header title="To-Do List" />
      <Todo/>
    </div>
  );
}

export default App;
