import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = (propps) => {

  const data = propps.todoItem;

  const [name,setName] = useState(data.name);
  
  
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
            checked={data.isImportant}
            onChange={() => {
              
            }}
          />
        </div>
        <div className="isCompleted">
          <label htmlFor="sb-isCompleted">isCompleted</label>
          <input 
            type="checkbox" 
            name="isCompleted" 
            checked={data.isCompleted}
          />
        </div>
      </form>
      <div className="groupBtn">
        <div className="btn cancleBtn">Cancle</div>
        <div className="btn">Save</div>
      </div>
    </div>
  );
};

export default Sidebar;
