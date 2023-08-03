import { createStore } from "redux";
import todotaskReducer from "./Reducers";


const store = createStore(todotaskReducer)

export default store