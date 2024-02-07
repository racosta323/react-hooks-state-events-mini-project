import React from "react";
import { useState } from "react"

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [newDetails, setNewDetails] = useState("")
  const [newCategory, setNewCategory] = useState("")

  const noAll = categories.filter((category)=> category !== "All")

  const categoryList = noAll.map((category)=>{
      return (
      <option
        key={category}>
        {category}
      </option>
      )
  })

  function handleSubmit(event){
    event.preventDefault()

    const newTask = {
      text: newDetails,
      category: newCategory,
      key: newDetails,
    }
    onTaskFormSubmit(newTask)
  }


  return (
    <form 
      className="new-task-form"
      onSubmit ={handleSubmit}
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
          value = {newCategory}
          onChange ={(e)=>setNewCategory(e.target.value)}
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
