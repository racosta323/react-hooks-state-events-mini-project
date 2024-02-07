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
  const [tasks, setTasks] = useState(TASKS)
  
  const [className, setClass] = useState(false)


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
      <CategoryFilter categories={CATEGORIES} onCategory ={onSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm />
      <TaskList tasks ={filteredTasksByCategory} removeHandler={removeHandler}/>
    </div>
  );
}

export default App;
