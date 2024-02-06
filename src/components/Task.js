import React from "react";
import { useState } from "react"

function Task( { text, category, removeHandler }) {

  return (
    <div className="task">
      <div className="label">{ category }</div>
      <div className="text">{ text }</div>
      <button onClick={()=>removeHandler(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
