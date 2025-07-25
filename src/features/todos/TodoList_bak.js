// src/features/todos/TodoList.js
//had both add and display logic in same file
//later i refactored and made them separate in
// todo and todolist
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Toggle
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
