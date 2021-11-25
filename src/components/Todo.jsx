import React from 'react';

const Todo = ({
  id,
  text,
  completed,
  completeTodo,
  deleteTodo
}) => {
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={() => completeTodo(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;