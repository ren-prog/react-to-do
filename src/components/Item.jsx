import React from "react";

import "./Item.css";

const Item = ({ task, handleTaskClick }) => {
  return (
    <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
    </div>
  );
};

export default Item;
