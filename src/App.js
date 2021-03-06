import React, { useEffect, useState } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterTodos = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  useEffect(getSavedTodos, []);

  useEffect(() => {
    filterTodos();
    saveTodos();
  }, [status, todos]);
  
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getSavedTodos() {
    if (localStorage.getItem("todos")) {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos([...savedTodos]);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form
        newTodoText={newTodoText}
        setNewTodoText={setNewTodoText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        status={status}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
