import React from "react";

function CategoryFilter({selectedCategories, onSetSelectedCategores, categories}) {
  
  const AllCategories = categories.map(cat => {
    const className = cat === selectedCategories ? "selected" : null
    return(
      <button key={cat} className={className} onClick={() => onSetSelectedCategores(cat)}>{cat}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {AllCategories}
    </div>
  );
}

export default CategoryFilter;
