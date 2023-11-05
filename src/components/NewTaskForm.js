import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      const newTask = {
        text,
        category,
        id: Date.now(), // You can use a better way to generate unique IDs
      };
      onTaskFormSubmit(newTask);
      setText("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Task text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
