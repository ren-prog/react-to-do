import React from "react";

import "./Item.css";

const Item = ({ task, handleTaskClick, handleDeleteTask }) => {
  return (
    <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => handleDeleteTask(task.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Item;
