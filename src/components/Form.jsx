import React from 'react';
import { v4 as uuid } from 'uuid';

const Form = ({
  newTodoText,
  setNewTodoText,
  todos,
  setTodos,
  setStatus,
}) => {
  const todoTextHandler = (e) => {
    setNewTodoText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {
        id: uuid(),
        text: newTodoText,
        completed: false
      }
    ]);
    setNewTodoText("");
  }

  const setTodosStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        onChange={todoTextHandler}
        value={newTodoText}
        type="text"
        className="todo-input"
      />

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={setTodosStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;