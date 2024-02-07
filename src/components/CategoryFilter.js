import React from "react";


function CategoryFilter({ categories, onCategory, selectedCategory }) {

  const renderCategories = () => {
    return categories.map((category)=>{
      const buttonClass = category === selectedCategory ? "selected" : "class"

      return (
        <button 
        key={category}
        className= {buttonClass}
        onClick={()=>{onCategory(category)}}>
        {category}
        </button>
        )
    })
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { renderCategories() }
    </div>
  );
}

export default CategoryFilter;
