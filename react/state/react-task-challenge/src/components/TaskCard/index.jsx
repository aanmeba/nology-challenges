import Task from "../Task";

const TaskCard = ({ tasks, handleTasks }) => {
  console.log(tasks, "-- taskCard");
  return (
    <>
      {tasks.map((item, index) => (
        <Task item={item} key={index} handleTasks={handleTasks} />
      ))}
    </>
  );
};

export default TaskCard;
