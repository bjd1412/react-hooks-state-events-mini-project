import React from "react";
import Task from "./Task"
function TaskList({tasks, Deleter}) {
  const AllTasks = tasks.map(task => (
    <Task key={task.text} text={task.text} category={task.category} Deleter={Deleter} />
  ))
  return (
    <div className="tasks">
      {AllTasks}
    </div>
  );
}

export default TaskList;
