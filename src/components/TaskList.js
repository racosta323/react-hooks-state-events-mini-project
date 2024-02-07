import React from "react";
import Task from "./Task"



function TaskList({ tasks, removeHandler }) {

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

export default TaskList
