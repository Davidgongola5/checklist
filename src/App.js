import React, { useState, useRef } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const addTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo.trim() !== '') {
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
    <>
      <style>
        {`
          body {
            background-color: #c2c2c2;
            margin: 0;
          }
        `}
      </style>
      <div style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', minHeight: '100vh' }}>
        <h1>Todo List</h1>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            ref={todoInputRef}
            placeholder="Enter your task..."
            style={{ padding: '8px', marginRight: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button onClick={addTodo} style={{ padding: '8px', backgroundColor: '#f6ff00', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                margin: '8px 0',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor : index % 2 === 0 ? '#f6ff00' : '#2226a1',
                color : index % 2 === 0 ? 'black' : "white",
              }}
              onClick={() => removeTodo(index)}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#a86632';
                e.target.style.color = 'black';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = index % 2 === 0 ? '#f6ff00' : '#2226a1';
                e.target.style.color = index % 2 === 0 ? 'black' : "white";
              }}
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;