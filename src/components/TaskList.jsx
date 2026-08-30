import Task from "./Task";

function TaskList({ tasks, onToggleTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;