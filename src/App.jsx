import "./App.css";
import Todoitem from "./components/Todoitem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import { useRef, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Học bài 1",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 2,
      name: "Học bài 2",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 3,
      name: "Học bài 3",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 4,
      name: "Học bài 4",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 5,
      name: "Học bài 5",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
    },
  ]);

  const [selectedFilterId, setSelectedFilterId] = useState("all");

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const [showSidebar, setShowSidebar] = useState(false);

  const inputRef = useRef();
  // console.log({inputRef});

  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoItemId);

  const handleCheckbox = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handTodoitemChange = (newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (newTodo.id === todo.id) return newTodo;
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleShowSidebar = (todoId) => {
    setShowSidebar(true);
    setActiveTodoItemId(todoId);
  };

  const FilterTodos = todoList
    .filter((todo) => {
      switch(selectedFilterId) {
        case "all": 
          return true;
        case "important":
          return todo.isImportant;
        case "completed":
          return todo.isCompleted;
        case "deleted": 
          return todo.isDeleted;
        default: 
          return true;
      }
    })
    .map((todo) => {
      return (
        <Todoitem
          id={todo.id}
          name={todo.name}
          key={todo.id}
          isImportant={todo.isImportant}
          isCompleted={todo.isCompleted}
          handleCheckbox={handleCheckbox}
          handleShowSidebar={handleShowSidebar}
        />
      );
    });

  function addItem(e) {
    if (e.key === "Enter") {
      const value = e.target.value;
      setTodoList([...todoList, { id: crypto.randomUUID(), name: value }]);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="container">
      <div className="left-sidebar">
        <FilterPanel
          selectedFilterId={selectedFilterId}
          setSelectedFilterId={setSelectedFilterId}
        />
      </div>
      <div className="main-content">
        <input
          ref={inputRef}
          type="text"
          name="add-new-task"
          className="task-input"
          alt="Add new task"
          placeholder="Add new task"
          onKeyDown={addItem}
        />

        <div>{FilterTodos}</div>
        {showSidebar && (
          <Sidebar
            key={activeTodoItemId}
            todoItem={activeTodoItem}
            handTodoItemChange={handTodoitemChange}
            setShowSidebar={setShowSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default App;
