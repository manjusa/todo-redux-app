import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

export const Todo = () => {
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
      <h1>Add Todos</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo item"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
