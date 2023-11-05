import React from "react";

function CategoryFilter(props) {
  const handleFilterClick = (category) => {
    props.onFilter(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button className="selected" onClick={() => handleFilterClick("All")}>
        All
      </button>
      {props.categories.map((category) => (
        <button key={category} onClick={() => handleFilterClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
