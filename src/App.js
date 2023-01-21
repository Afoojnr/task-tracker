import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { text: "a", id: 0, day: "monday", reminder: false },
    { text: "b", reminder: false, id: 1, day: "friday" },
  ]);
  const [showAddTask, setShowAddTask] = useState(false)



  // Show Add task
  const toggleAddTask =()=>{
    setShowAddTask(!showAddTask)
  }
  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header showAdd = {toggleAddTask} showAddTask = {showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks available"
      )}
    </div>
  );
}

export default App;
