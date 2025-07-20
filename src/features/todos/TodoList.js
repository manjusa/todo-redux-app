import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todoSlice";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos2);
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
      <h1>Add Todo</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo))}
              />
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
