import { ADD_TASK, CHANGE_TASK, DELETE_TASK, DONE_TASK } from "./ActionTypes";

const initialState = {
    tasksList : [
        {id : Math.random(), textOfTask : "first Task", isDone : false}
    ]
}

export const todotaskReducer = (state = initialState, {type, payload}) =>{

    switch (type) {
        case DONE_TASK:
            return {
                ...state, tasksList : state.tasksList.map((el)=>
                el.id === payload ? {...el, isDone : !el.isDone} : el)
            }
        case DELETE_TASK:
            return {
                ...state, tasksList : state.tasksList.filter((el)=>
                el.id !== payload)
            }
        case ADD_TASK:
            return {
                ...state, tasksList : [...state.tasksList, payload]
            }

        case CHANGE_TASK:
            return {
                ...state, tasksList: state.tasksList.map((el)=>
                el.id === payload.id ? {...el, textOfTask: payload.textOfTask}: el)
            }
    
        default: return state
    }


}
export default todotaskReducer

