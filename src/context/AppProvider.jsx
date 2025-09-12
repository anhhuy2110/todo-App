import React, { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [todoList, setTodoList] = useState([
      {
        id: 1,
        name: "Học bài 1",
        isImportant: false,
        isCompleted: false,
        isDeleted: false,
        category: "personal",
      },
      {
        id: 2,
        name: "Học bài 2",
        isImportant: false,
        isCompleted: false,
        isDeleted: false,
        category: "personal",
      },
      {
        id: 3,
        name: "Học bài 3",
        isImportant: false,
        isCompleted: true,
        isDeleted: false,
        category: "personal",
      },
      {
        id: 4,
        name: "Học bài 4",
        isImportant: true,
        isCompleted: false,
        isDeleted: false,
        category: "company",
      },
      {
        id: 5,
        name: "Học bài 5",
        isImportant: false,
        isCompleted: false,
        isDeleted: false,
        category: "personal",
      },
    ]);

  const [selectedFilterId, setSelectedFilterId] = useState("all");

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const [selectCategoryId, setSelectCategoryId] = useState();

  const [searchText, setSearchText] = useState('');

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <AppContext.Provider value={
      { 
        selectCategoryId, setSelectCategoryId,
        todoList, setTodoList,
        selectedFilterId, setSelectedFilterId,
        activeTodoItemId, setActiveTodoItemId,
        showSidebar, setShowSidebar,
        searchText, setSearchText,
      }
      }>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export {AppContext};
