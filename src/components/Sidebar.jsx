import React, {useState } from "react";
import { CATEGORY_ITEMS } from "./constants";
import "./Sidebar.css";

const Sidebar = (propps) => {

  const data = propps.todoItem;

  const [name,setName] = useState(data.name);

  const [isImportant, setIsImportant] = useState(data.isImportant);

  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const [category, setCategory] = useState(data.category);
  

  const handleSave = () => {
    const newTodo = {...data, name, isImportant, isCompleted, category}
    propps.handTodoItemChange(newTodo);
    propps.setShowSidebar(false);
  }

  const handleCancle = () =>  {
    propps.setShowSidebar(false);
  }
  
  return (
    <div className="sidebar">
      <form className="infoSidebar">
        <div className="todoName">
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => {
              setName(e.target.value);
              // propps.handTodoNameChange(data.id, e.target.value);
            }}
          />
        </div>
        <div className="isImportant">
          <label htmlFor="sb-isImportant">isImportant</label>
          <input 
            type="checkbox" 
            name="isImportant" 
            checked={isImportant}
            onChange={() => {
              setIsImportant(!isImportant);
            }}
          />
        </div>
        <div className="isCompleted">
          <label htmlFor="sb-isCompleted">isCompleted</label>
          <input 
            type="checkbox" 
            name="isCompleted" 
            checked={isCompleted}
            onChange={() => {
              setIsCompleted(!isCompleted);
            }}
          />
        </div>
      </form>
      <div className="sb-form-field">
        <label htmlFor="sb-category">Category</label>
        <select 
          id="sb-category" 
          value={category} 
          onChange={(e) => {
            setCategory(e.target.value);
        }}>
          {CATEGORY_ITEMS.map((category) => {
            return (
              <option value={category.id} key={category.id}>{category.label}</option>
            )
          })}
        </select>
      </div>
      <div className="groupBtn">
        <div className="btn cancleBtn" onClick={handleCancle}>Cancle</div>
        <div className="btn" onClick={handleSave}>Save</div>
      </div>
    </div>
  );
};

export default Sidebar;
