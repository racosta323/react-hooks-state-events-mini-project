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
  
  const filtered = TASKS.filter((task)=>{
    if(selectedCategory === 'All') return true;
    return task.category === selectedCategory
  })
  
  function onSelectedCategory(category){
    setSelectedCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategory ={onSelectedCategory}/>
      <NewTaskForm />
      <TaskList tasks ={filtered}/>
    </div>
  );
}

export default App;
