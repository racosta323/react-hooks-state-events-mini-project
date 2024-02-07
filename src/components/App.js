import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react"

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [tasks, setTasks] = useState(TASKS) //i think i just want to change this
  const [className, setClass] = useState(false)
  const [newDetails, setNewDetails] = useState("")
  
 function handleSelect(event){
    const selectedCategory = event.target.value
    setSelectedCategory(selectedCategory)
  }

  

  function addTask(e){
    console.log(e)
    e.preventDefault()

    const newTask = {
      text: newDetails,
      category: selectedCategory,
      key: newDetails,
      removeHandler: {removeHandler}
    }
  
    const updatedTasks = [...tasks, newTask]

    setTasks(updatedTasks)
  }

  

  const filteredTasksByCategory = tasks.filter((task)=>{
    if(selectedCategory === 'All') return true;
    return task.category === selectedCategory

  })
  
  function onSelectedCategory(category){
    setSelectedCategory(category)
    setClass(category)
  }
  
  function removeHandler(text){
    const updateCategories = filteredTasksByCategory.filter((task)=>task.text !== text)
    setTasks(updateCategories)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategory ={onSelectedCategory} 
        selectedCategory={selectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        newDetails={newDetails} 
        setNewDetails={setNewDetails} 
        onTaskFormSubmit={addTask}
        handleSelect={handleSelect}
        selectedCategory={selectedCategory}
      />
      <TaskList 
        tasks ={filteredTasksByCategory} 
        removeHandler={removeHandler}
      />
    </div>
  );
}

export default App;
