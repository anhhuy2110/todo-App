import React from "react";

const Todoitem = (propps) => {
  return (
    <div className="todo-item">
      <div className="todo-item-ifoLeft">
        <input type="checkbox" checked={propps.isCompleted} onChange={() => {propps.handleCheckbox(propps.id)}}/>
        <p className="todo-item-text">{propps.name}</p>
      </div>
      {propps.isImportant && <p>⭐</p>}
    </div>
  );
};

export default Todoitem;
