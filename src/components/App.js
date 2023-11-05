// App.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Work", "Home", "Personal"];

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={changeCategory}
      />
      <NewTaskForm categories={categories} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDelete={deleteTask} />
    </div>
  );
}

export default App;
