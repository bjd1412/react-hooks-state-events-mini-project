import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

  const [selectedCategories, setSelectedCategores] = useState("All")

 const OptionCategories = CATEGORIES.filter(cat => cat !== "All")

function TaskFormSubmit (newTask) {
  setTasks([...tasks, newTask])
}


function DeleteFoo (id) {
  const DeleteTask = tasks.filter(task => task.text !== id)
  setTasks(DeleteTask)
}

const AllTasks = tasks.filter(task => {
  if(selectedCategories === "All") {
    return true
  }else {
    return selectedCategories === task.category
  }
})

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategories={selectedCategories} onSetSelectedCategores={setSelectedCategores} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={TaskFormSubmit} categories={OptionCategories}/>
      <TaskList tasks={AllTasks} Deleter={DeleteFoo} />
    </div>
  );
}

export default App;
