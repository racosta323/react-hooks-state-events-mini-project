import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react"

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState('all')

  function onSelectedCategory(newList){
    console.log(newList.category)
    
    const filteredTasks = TASKS.filter((task)=>{
      console.log(task.category)
      if(selectedCategory === 'all') return true;
      return task.category === newList.category
    })
    setSelectedCategory(filteredTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategory ={onSelectedCategory}/>
      <NewTaskForm />
      <TaskList tasks ={TASKS} onCategory={onSelectedCategory}/>
    </div>
  );
}

export default App;
