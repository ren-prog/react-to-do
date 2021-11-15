import React from "react";

import "./Item.css";

const Item = ({ task }) => {
  return <h1>{task.title}</h1>;
};

export default Item;
