import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
const [newTasks, setNewTasks] = useState("")
const [newCats, setNewCats] = useState("All")

function TaskFoo(e) {
  setNewTasks(e.target.value)
}

function CatFoo (e) {
  setNewCats(e.target.value)
}

function Submitter (e) {
  e.preventDefault()
  onTaskFormSubmit({
    text: newTasks,
    category: newCats
  })
}

  return (
    <form className="new-task-form" onSubmit={Submitter}>
      <label>
        Details
        <input type="text" name="text" value={newTasks} onChange={TaskFoo}/>
      </label>
      <label>
        Category
        <select name="category" value={newCats} onChange={CatFoo}>
          {categories.map(options => (
            <option key={options}>{options}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
