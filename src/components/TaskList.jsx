import { useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import useLocalStorage from "../hooks/useLocalStorage";

function TaskList() {
  const [tasks, setTasks] = useLocalStorage("studyTasks", []);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(tasks.length === 0);
  }, [tasks]);

  function handleAddTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div
      className="container py-5"
      style={{ maxWidth: "900px" }}
    >
      <div className="tasks p-4">
        <h2 className="mb-4">My Study Tasks</h2>

        <AddTask onAddTask={handleAddTask} />

        {showMessage && (
          <p className="no-tasks">
            No tasks yet. Add your first study task.
          </p>
        )}

        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleTask={handleToggleTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;