import Item from "./Item";
const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Item task={task} handleTaskClick={handleTaskClick} />
      ))}
    </>
  );
};

export default Tasks;
