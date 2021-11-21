import React, { useState } from 'react';
import './App.css';
// Importing components
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To Do List { newTodoText }</h1>
      </header>
      <Form
        newTodoText={newTodoText}
        setNewTodoText={setNewTodoText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList />
    </div>
  );
}

export default App;
