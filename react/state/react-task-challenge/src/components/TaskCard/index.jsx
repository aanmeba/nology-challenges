import styles from "./TaskCard.module.scss";
import { capitalise } from "../../helper/helper.js";

const TaskCard = ({ item, taskIndex, handleTasks }) => {
  const { task, priority } = item;
  const handleButton = () => {
    handleTasks(task, taskIndex);
  };

  const priorityClassList = [styles.container];

  const priorityName =
    priority !== "very high" ? priority : priority.split(" ").join("__");

  priorityClassList.push(styles[priorityName]);

  // switch (priority) {
  //   case "very high":
  //     priorityClassList.push(styles.very__high);
  //     break;
  //   case "high":
  //     priorityClassList.push(styles.high);
  //     break;
  //   case "medium":
  //     priorityClassList.push(styles.medium);
  //     break;
  //   case "low":
  //     priorityClassList.push(styles.low);
  //     break;
  // }

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

export default TaskCard;
