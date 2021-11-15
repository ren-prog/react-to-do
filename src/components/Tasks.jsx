import Item from "./Item";
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Item task={task} />
      ))}
    </>
  );
};

export default Tasks;
