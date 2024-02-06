import React from "react";


function CategoryFilter({ categories, onCategory }) {



  const renderCategories = () => {
    return categories.map((category)=>{
      return (
        <button key={category} onClick={()=>onCategory({category})}>{category}</button>
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
