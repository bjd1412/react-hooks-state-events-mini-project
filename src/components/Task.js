import React from "react";

function Task({text, category, Deleter}) {
  function DeleteClick() {
    Deleter(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={DeleteClick}>X</button>
    </div>
  );
}

export default Task;
