import { useState } from "react";
import priorities from "../../data/priorities";
import { capitalise } from "../../helper/helper";
import styles from "./AddTask.module.scss";

const AddTask = ({ handleTasks }) => {
  // make the input and select fields as comtrolled components
  const defaultValues = { task: "", priority: "low" };
  const [formValues, setFormValues] = useState(defaultValues);

  const onChange = (e) => {
    console.log(e.target); // <input /> OR <select>
    const { name, value } = e.target;
    console.log(name, value); // task OR priority
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /** my solution below - to handle form */
    // const form = e.target;
    // const formData = new FormData(form);
    // const formJson = Object.fromEntries(formData.entries());
    // handleTasks(formJson);

    handleTasks(formValues);
    setFormValues(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.input}>
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Type your task here"
          value={formValues.task}
          onChange={onChange}
          required
        />
      </div>
      <div className={styles.select}>
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          value={formValues.priority}
          onChange={onChange}
        >
          {/* use map for repeating action!  */}
          {priorities.map((p, i) => (
            <option value={p} key={i}>
              {capitalise(p)}
            </option>
          ))}
          {/* <option value="very high">Very High</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option> */}
        </select>
      </div>
      <button className={styles.submit__button} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;
