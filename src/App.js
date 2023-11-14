import logo from './logo.svg';
import './App.css';



import React, { useState, useRef } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const addTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1>Todo List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input style={{ padding: '8px', marginRight: '8px', border: '1px solid #ccc', borderRadius: '4px' }} type="text" ref={todoInputRef} />
        <button style={{ padding: '8px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={addTodo}>
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ margin: '8px 0', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#e6e6e6' }}
            onClick={() => removeTodo(index)}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;