import React from "react";

import "./Item.css";

const Item = ({ task }) => {
  return <div className="task-container">{task.title}</div>;
};

export default Item;
