function Task({ title, completed, onToggle }) {
  return (
    <div className="task" onClick={onToggle}>
      <span>{title}</span>

      {completed ? (
        <span className="completed">
          Completed
        </span>
      ) : (
        <span className="not-completed">
          Not Completed
        </span>
      )}
    </div>
  );
}

export default Task;