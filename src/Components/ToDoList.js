import React from 'react'
import { useSelector } from 'react-redux'
import TodoModel from './TodoModel'
import '../App.css'
const ToDoList = () => {
  const list = useSelector(state => state.tasksList)
  
  return (
    <div className='list'>
    {
      list.map((task)=>
      <TodoModel  task={task} key={task.id}/>)
    }
    
    </div>
  )
}

export default ToDoList