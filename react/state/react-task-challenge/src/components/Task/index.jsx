import styles from "./Task.module.scss";

const Task = ({ item, handleTasks }) => {
  const { task, priority } = item;

  const handleButton = () => {
    handleTasks(task);
  };

  return (
    <div className={styles.container}>
      <p>{task}</p>
      <p>{priority}</p>
      <button onClick={handleButton}>X</button>
    </div>
  );
};

export default Task;
