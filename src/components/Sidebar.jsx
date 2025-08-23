import React, { use, useState } from "react";
import "./Sidebar.css";

const Sidebar = (propps) => {

  const data = propps.todoItem;

  const [name,setName] = useState(data.name);

  const [isImportant, setIsImportant] = useState(data.isImportant);

  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  

  const handleSave = () => {
    const newTodo = {...data, name, isImportant, isCompleted}
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
      <div className="groupBtn">
        <div className="btn cancleBtn" onClick={handleCancle}>Cancle</div>
        <div className="btn" onClick={handleSave}>Save</div>
      </div>
    </div>
  );
};

export default Sidebar;
