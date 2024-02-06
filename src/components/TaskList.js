import React from "react";
import Task from "./Task"
import { useState } from "react"


function TaskList({ tasks }) {

const [taskList, setTaskList] = useState(tasks)

function removeHandler(text){
  console.log("Before removal:", taskList)
  const newTaskArray = taskList.filter((task)=>{
    return task.text !== text
  })
  console.log("After removal:", newTaskArray)
  setTaskList(newTaskArray)
}


const renderTasks = () => {
  return tasks.map((task)=>{
    return <Task 
    text ={task.text} 
    category={task.category} 
    key={task.text} 
    removeHandler={removeHandler}/>
  })
}

  return (
    <div className="tasks">
      {renderTasks()}
    </div>
  );
}

export default TaskList;
