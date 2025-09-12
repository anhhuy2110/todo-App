import "./App.css";
import Todoitem from "./components/Todoitem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import {useMemo, useRef, useState } from "react";
import useAppContext from "./context/useAppContext";

function App() {
  const { 
    selectCategoryId, 
    todoList, 
    setTodoList,
    selectedFilterId, 
    activeTodoItemId, 
    setActiveTodoItemId,
    showSidebar, 
    setShowSidebar,
    searchText, 
    setSearchText,
  } = useAppContext()

  const inputRef = useRef();

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

  const FilterTodos = useMemo(() => {
    return todoList.filter((todo) => {

      if(!todo.name.includes(searchText)){
        return false;
      }

      if( selectCategoryId && todo.category !== selectCategoryId) {
        return false;
      }

      switch (selectedFilterId) {
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
      
    });

  }, [todoList, selectedFilterId, searchText, selectCategoryId]).map((todo) => {
    return (
      <Todoitem
        id={todo.id}
        name={todo.name}
        key={todo.id}
        isImportant={todo.isImportant}
        isCompleted={todo.isCompleted}
        category={todo.category}
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
          // selectedFilterId={selectedFilterId}
          // setSelectedFilterId={setSelectedFilterId}
          searchText={searchText}
          setSearchText={setSearchText}
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
