import { rankPriority } from "../../data/priorities";
import TaskCard from "../TaskCard";
import styles from "./TaskCard.module.scss";

const TaskList = ({ tasks, handleTasks }) => {
  const sortedArr = tasks.sort((a, b) => rankPriority(a) - rankPriority(b));
  console.log(sortedArr);
  return (
    <section className={styles.container}>
      {/* {tasks.map((item, index) => (
        <TaskCard
          taskIndex={index}
          item={item}
          key={index}
          handleTasks={handleTasks}
        />
      ))} */}
      {sortedArr.map((item, index) => (
        <TaskCard
          taskIndex={index}
          item={item}
          key={index}
          handleTasks={handleTasks}
        />
      ))}
    </section>
  );
};

export default TaskList;
