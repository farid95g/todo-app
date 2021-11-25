import React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  setTodos,
  filteredTodos
}) => {
  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo;
    }));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            key={todo.id}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;