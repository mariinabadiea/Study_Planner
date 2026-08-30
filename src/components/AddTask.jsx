import { useState } from "react";

function AddTask({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.trim() === "") {
      return;
    }

    onAddTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;