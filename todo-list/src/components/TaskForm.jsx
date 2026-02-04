import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(availableDates[0]);

  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const value = date.toISOString().split("T")[0];
    const label = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    return { value, label };
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), title: taskTitle, date: taskDate };
    onAddTask(newTask);
    setTaskDate(availableDates[0].value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task-title"
        placeholder="Write your task..."
        onChange={(e) => setTaskTitle(e.target.value)}
      ></input>
      <select value={taskDate} onChange={(e) => setTaskDate(e.target.value)}>
        {availableDates.map((date) => (
          <option key={date.value} value={date.value}>
            {date.label}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
