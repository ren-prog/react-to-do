import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import "./Item.css";

const Item = ({ task, handleTaskClick, handleDeleteTask }) => {
  const history = useHistory();
  const handletaskDetailsRoute = () => {
    history.push(`/details/${task.title}`);
  };
  return (
    <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => handleDeleteTask(task.id)}>
          <CgClose />
        </button>
        <button className="see-task-details-button" onClick={handletaskDetailsRoute}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Item;
