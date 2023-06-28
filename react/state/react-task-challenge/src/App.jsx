import { useState } from "react";
import taskData from "./data/tasks.js";

import "./App.css";
import TaskCard from "./components/TaskCard/index.jsx";
import AddTask from "./components/AddTask/index.jsx";

function App() {
  const [tasks, setTasks] = useState(taskData);

  // setTasks([...tasks, { task: "Go for a run!", priority: "high" }]);
  const deleteTask = (value) => {
    const filteredTasks = tasks.filter((task) => task.task !== value);
    setTasks(filteredTasks);
  };

  const addNewTask = (value) => {
    setTasks([...tasks, value]);
    console.log("AddNewTask", tasks);
  };

  return (
    <>
      <AddTask handleTasks={addNewTask} />
      <TaskCard tasks={tasks} handleTasks={deleteTask} />
    </>
  );
}

export default App;
