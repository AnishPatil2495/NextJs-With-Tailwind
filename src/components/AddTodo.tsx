"use client";

import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [currentTodo, setCurrentTodo] = useState<string>("");

  const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(currentTodo.trim() !== ""){
        setTodos([...todos, currentTodo.trim()]);
        setCurrentTodo("");
    };
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter todo here..."
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
