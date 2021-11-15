import Item from "./Item";
const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Item task={task} handleTaskClick={handleTaskClick} handleDeleteTask={handleDeleteTask} />
      ))}
    </>
  );
};

export default Tasks;
