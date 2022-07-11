import { useState } from 'react';
import uuid from 'react-uuid'

import Inputs from './components/Inputs';
import TaskItem from './components/TaskItem';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const handleSubmit = (input) => {
    setTasks(prev => {
      return [
        ...prev,
        {
          id: uuid(),
          name: input
        }
      ];
    });

  }
  
  const handleBtnClick = (id) => {
    setTasks(prev => {
      return prev.filter(task => task.id !== id);
    });
  }
  
  console.log(tasks);
  return <div className='App'>
    <div className='visible-elements'>
        <Inputs handleSubmit={handleSubmit} />
        <div className='task-container'>
          {tasks.map((task) => {
            return <TaskItem key={uuid()} task={task} handleBtnClick={handleBtnClick} />
          })}
        </div>
    </div>
  </div>
}
export default App;
