import { useState } from "react";
import taskData from "./data/tasks.js";

import "./App.css";
import TaskCard from "./components/TaskCard/index.jsx";
import AddTask from "./components/AddTask/index.jsx";
import Header from "./components/Header/index.jsx";
import SortButton from "./components/SortButton/index.jsx";

function App() {
  const [tasks, setTasks] = useState(taskData);

  const deleteTask = (value) => {
    const filteredTasks = tasks.filter((task) => task.task !== value);
    setTasks(filteredTasks);
  };

  const addNewTask = (value) => setTasks([...tasks, value]);
  const sortTasks = (tasks) => setTasks([...tasks]);

  return (
    <>
      <Header>
        <AddTask handleTasks={addNewTask} />
        <SortButton tasks={tasks} handleTasks={sortTasks} />
      </Header>
      <TaskCard tasks={tasks} handleTasks={deleteTask} />
    </>
  );
}

export default App;
