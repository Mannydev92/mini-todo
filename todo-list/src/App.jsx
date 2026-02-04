import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(tasks, newTask) {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1>Mi primera App de React</h1>
      <p>Estoy aprendiendo React paso a paso</p>
    </>
  );
}

export default App;
