
//import React, { useState } from 'react'
import '../App.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { change_task, delete_task, done_task } from '../JS/Actions';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';

const TodoModel = ({task}) => {

  const dispatch = useDispatch()
  const [text, setText] = useState('')
  
  console.log(task)
   
  const handleDelete = id => {
    dispatch(delete_task(id))
  }
  const hadleChange = () => {

    dispatch(change_task(task.id, text))
    handleClose()

  }
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


  return (
    <div className='item'>
    
    <List sx={{ maxWidth: 600, bgcolor: 'rgba(0, 0, 0, 0.1)', width:'100%'}}>
    
          <ListItem style={{marginLeft:'20px'}}
            key={task.id}
            secondaryAction={
              <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
              <span >{task.textOfTask}</span>
              <IconButton onClick={()=> handleDelete(task.id)}>
                <DeleteIcon  />
              </IconButton>
              
              <Button onClick={handleOpen}>Open modal</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  defaultValue={task.textOfTask}
                  variant="filled"
                  size="small"
                  onChange={(e)=>setText(e.target.value)}
                />
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={()=>hadleChange()} >Change</Button>
                    <Button onClick={()=>handleClose()}>Close</Button>
                    
                  </ButtonGroup>
                </Box>
              </Modal>
              </div>
             
            }
            disablePadding
          >
            
              <ListItemIcon >
                <Checkbox
                  edge="start"
                  //checked={task.isDone}
                  tabIndex={-1}
                  disableRipple
                  //inputProps={{ 'aria-labelledby': labelId }}
                  style={{display:'inline'}}
                  onClick={() => dispatch(done_task(task.id))}                
                />
              </ListItemIcon>
            
            
            
          </ListItem>
        
          
    </List><br />
    </div>
  );
}

export default TodoModel