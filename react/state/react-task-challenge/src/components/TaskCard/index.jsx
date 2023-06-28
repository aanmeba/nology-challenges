import Task from "../Task";
import styles from "./TaskCard.module.scss";

const TaskCard = ({ tasks, handleTasks }) => {
  return (
    <section className={styles.container}>
      {tasks.map((item, index) => (
        <Task item={item} key={index} handleTasks={handleTasks} />
      ))}
    </section>
  );
};

export default TaskCard;
