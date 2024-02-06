import React from "react";
import Task from "./Task"
import { useState } from "react"

function TaskList({ tasks, onCategory }) {

const [taskList, setTaskList] = useState(tasks)

function removeHandler(text){
  const newTaskArray = taskList.filter((task)=>{
    return task.text !== text
  })
  setTaskList(newTaskArray)
}

const renderTasks = () => {
  return taskList.map((task)=>{
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
