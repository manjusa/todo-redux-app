import "./App.css";
import { Todo } from "./features/todos/Todo";
import { TodoList } from "./features/todos/TodoList";

function App() {
  return (
    <div className="App">
      <Todo />
      <TodoList />{" "}
    </div>
  );
}

export default App;
