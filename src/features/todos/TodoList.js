import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos2);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
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
      ))}
    </ul>
  );
};
