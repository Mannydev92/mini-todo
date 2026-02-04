function TaskItem({ task }) {
  function deleteTask() {
    alert("Task deleted!");
  }
  return (
    <div className="task-item">
      <div className="task-title">{task.title}</div>
      <div className="task-date">{task.date}</div>
      <button className="delete-btn" onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
