import styles from "./Task.module.css";
function Task({ task, onToggleTask }) {
  return (
    <div
      className={styles.task}
      onClick={() => onToggleTask(task.id)}
    >
      <span>{task.title}</span>
      {task.completed ? (
        <span className={styles.completed}>
          Completed
        </span>
      ) : (
        <span className={styles.notCompleted}>
          Not Completed
        </span>
      )}
    </div>
  );
}
export default Task;