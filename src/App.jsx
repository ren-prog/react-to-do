import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: false,
    },
  ]);

  const handleAddTask = (title) => {
    const newTask = [
      ...tasks,
      {
        title: title,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <AddTask handleAddTask={handleAddTask} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};
export default App;
