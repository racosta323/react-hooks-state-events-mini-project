import React from "react";

function NewTaskForm({ categories, newDetails, setNewDetails, onTaskFormSubmit, handleSelect, selectedCategory }) {

  const noAll = categories.filter((category)=> category !== "All")

  const categoryList = noAll.map((category)=>{
      return (
      <option
        key={category}>
        {category}
      </option>
      )
  })


  return (
    <form 
      className="new-task-form"
      onSubmit ={(event)=>onTaskFormSubmit(event)}
    >
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value ={newDetails}
          onChange={(e)=>setNewDetails(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          onChange ={(e)=>handleSelect(e)}
        >
          {categoryList}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task"
        />
    </form>
  );
}

export default NewTaskForm;
