import { useState } from "react";
import taskData from "./data/tasks.js";

import "./App.css";

import AddTask from "./components/AddTask/index.jsx";
import Header from "./components/Header/index.jsx";
import SortButton from "./components/SortButton/index.jsx";
import TaskList from "./components/TaskList/index.jsx";

function App() {
  const [tasks, setTasks] = useState(taskData);

  const deleteTask = (value, index) => {
    // const filteredTasks = tasks.filter((task) => task.task !== value);
    const filteredTasks = tasks.filter((_, i) => index !== i);

    setTasks(filteredTasks);
  };

  const addNewTask = (taskObject) => setTasks([...tasks, taskObject]);
  const sortTasks = (tasks) => setTasks([...tasks]);

  return (
    <>
      <Header>
        <AddTask handleTasks={addNewTask} />
        <SortButton tasks={tasks} handleTasks={sortTasks} />
      </Header>
      <TaskList tasks={tasks} handleTasks={deleteTask} />
    </>
  );
}

export default App;
