import styles from "./SortButton.module.scss";

const SortButton = ({ tasks, handleTasks }) => {
  const handleButton = () => {
    const sortedList = tasks && sortTasks(tasks);
    sortedList && handleTasks(sortedList);
  };

  return (
    <button onClick={handleButton} className={styles.sort__button}>
      Sort
    </button>
  );
};

const sortTasks = (arr) => {
  const orderOfPriority = ["very high", "high", "medium", "low"];
  return arr.sort(
    (a, b) =>
      orderOfPriority.indexOf(a.priority) - orderOfPriority.indexOf(b.priority)
  );
};

export default SortButton;
