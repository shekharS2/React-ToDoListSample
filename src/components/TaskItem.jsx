import React from 'react';

import './TaskItem.css'

function TaskItem(props) {
  return <div className='each-task'>
    {props.task.name} 
    <button className='each-task-btn' onClick={() => props.handleBtnClick(props.task.id)}> X </button>
  </div>;
}

export default TaskItem