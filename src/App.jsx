import "./App.css";
import Todoitem from "./components/Todoitem";

function App() {
  const todoList = ["Học bài", "Học bài 1", "Học bài 2", "Học bài 3"];

  const todos = todoList.map((todo) => {
    return <Todoitem name={todo} />;
  });

  return (
    <div className="container">
      <input
        type="text"
        name="add-new-task"
        className="task-input"
        alt="Add new task"
        placeholder="Add new task"
      />

      <div>{todos}</div>
    </div>
  );
}

export default App;
