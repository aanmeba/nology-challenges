import styles from "./AddTask.module.scss";

const AddTask = ({ handleTasks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    handleTasks(formJson);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.input}>
        <label htmlFor="task">New Task </label>
        <input type="text" name="task" id="task" />
      </div>
      <div className={styles.select}>
        <label htmlFor="priority">Priority </label>
        <select name="priority" id="priority">
          <option value="very high">Very High</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button className={styles.submit__button} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;
