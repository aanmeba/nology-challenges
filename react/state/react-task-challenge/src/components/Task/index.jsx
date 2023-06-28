import styles from "./Task.module.scss";

const Task = ({ item, handleTasks }) => {
  const { task, priority } = item;

  const handleButton = () => {
    handleTasks(task);
  };

  const priorityClassList = [styles.container];
  switch (priority) {
    case "very high":
      priorityClassList.push(styles.very__high);
      break;
    case "high":
      priorityClassList.push(styles.high);
      break;
    case "medium":
      priorityClassList.push(styles.medium);
      break;
    case "low":
      priorityClassList.push(styles.low);
      break;
  }

  return (
    <div className={priorityClassList.join(" ")}>
      <p className={styles.task}>{capitalise(task)}</p>
      <p className={styles.priority}>{capitalise(priority)}</p>
      <button className={styles.delete__button} onClick={handleButton}>
        X
      </button>
    </div>
  );
};

const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default Task;
