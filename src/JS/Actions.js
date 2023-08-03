import { ADD_TASK, CHANGE_TASK, DELETE_TASK, DONE_TASK } from "./ActionTypes"

export const done_task = id => {
    return{
        type : DONE_TASK,
        payload : id
    }
}

export const delete_task = id =>{
    return{
        type : DELETE_TASK,
        payload : id
    }
}

export const add_task = newTask =>{
    return{
        type : ADD_TASK,
        payload : newTask
    }
}

export const change_task = (id, textOfTask) =>{
    return{
        type : CHANGE_TASK,
        payload : {id, textOfTask}
    }
}