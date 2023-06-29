import { rankPriority } from "../../data/priorities";
import styles from "./SortButton.module.scss";

const SortButton = ({ tasks, handleTasks }) => {
  const handleButton = () => {
    const sortedList =
      tasks &&
      tasks.sort((a, b) => rankPriority(a.priority) - rankPriority(b.priority));
    sortedList && handleTasks(sortedList);
  };

  return (
    <button onClick={handleButton} className={styles.sort__button}>
      Sort
    </button>
  );
};

// const sortTasks = (arr) => {
//   const orderOfPriority = ["very high", "high", "medium", "low"];
//   return arr.sort(
//     (a, b) =>
//       orderOfPriority.indexOf(a.priority) - orderOfPriority.indexOf(b.priority)
//   );
// };

export default SortButton;
