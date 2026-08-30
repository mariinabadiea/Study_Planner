import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Study React",
      completed: true,
    },
    {
      id: 2,
      title: "Practice JavaScript",
      completed: false,
    },
    {
      id: 3,
      title: "Review AI",
      completed: false,
    },
  ]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="app">
      <Header />

      <div className="tasks">
        <h2>Today's Tasks</h2>

        <AddTask onAddTask={addTask} />

        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            onToggleTask={toggleTask}
          />
        ) : (
          <p className="no-tasks">
            No tasks available
          </p>
        )}

        {tasks.length > 0 && (
          <p className="task-count">
            You have {tasks.length} tasks to study
          </p>
        )}
      </div>
    </div>
  );
}

export default App;