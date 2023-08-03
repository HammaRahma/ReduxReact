import { IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { add_task } from '../JS/Actions'
import { createSvgIcon } from '@mui/material/utils';

const AddTask = () => {
  const [newtext, setnewText] = useState('')
  const [marginbottom, setMarginbottom] = useState(false);

  const dispatch = useDispatch()

  const toggleClass = () =>{
      
      setMarginbottom(!marginbottom)
      
  }
  const handleAdd = () =>{
    dispatch(add_task({id: Math.random(), textOfTask : newtext, isDone : false}))
    toggleClass()
  }
  const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );
  return (
    <div className='itemADD'>
    
    <TextField
          id="filled-search"
          label="Add Task"
          type="search"
          variant="filled"
          onChange={(el) => setnewText(el.target.value)}
         
        />
      <IconButton className={marginbottom ? 'itemADD': null} 
                  onClick={() => handleAdd()}>
        <PlusIcon />
      </IconButton>
    </div>
  )
}

export default AddTask