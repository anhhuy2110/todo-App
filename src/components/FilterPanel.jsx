import { useMemo } from "react";
import "./FilterPanel.css";
import CategoryList from "./CategoryList";
import FilterPanelList from "./FilterPanelList";
import useAppContext from "../context/useAppContext";
// import PropTypes from 'prop-types';


const FilterPanel = ({ searchText, setSearchText}) => {

  const {todoList } = useAppContext();

  const countByFilterType = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        let newAcc = { ...acc };
        if (cur.isCompleted === true)
          newAcc = { ...newAcc, completed: newAcc.completed + 1 };
        if (cur.isImportant === true)
          newAcc = { ...newAcc, important: newAcc.important + 1 };
        if (cur.isDeleted === true)
          newAcc = { ...newAcc, deleted: newAcc.deleted + 1 };
        return newAcc;
      },
      { all: todoList.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  // console.log(countByFilterType);

  return (
    <div className="filter-panel">
      <div className="search">
        <input
          type="text" placeholder="Search" name="search-icon" 
          value={searchText}
          onChange={(e) => {
              setSearchText(e.target.value);
          }}
          />
      </div>
      
      <FilterPanelList 
        countByFilterType = {countByFilterType}
      />

      <CategoryList />

    </div>
  );
};

export default FilterPanel;
