import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="tasks">
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;