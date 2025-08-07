import React from "react";

const Todoitem = (propps) => {
  return (
    <div className="todo-item">
      <p className="todo-item-text">{propps.name}</p>
    </div>
  );
};

export default Todoitem;
