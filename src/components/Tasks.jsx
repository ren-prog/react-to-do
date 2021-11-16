import Item from "./Item";
const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </>
  );
};

export default Tasks;
