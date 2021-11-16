import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };
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

  const handleDeleteTask = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleAddTask={handleAddTask} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleDeleteTask={handleDeleteTask} />
      </div>
    </>
  );
};
export default App;
