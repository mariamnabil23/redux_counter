
import { legacy_createStore } from "redux";


const initState = {value : 1};
const counterReducer =(state = initState , action)=>{
    if(action.type === 'increase'){
        return {...state, value : state.value + action.payload}
    }
    if(action.type === 'decrease'){
        return {...state, value : state.value - action.payload}
    }
    return state;
}

//create store
const store = legacy_createStore(counterReducer);
export default store;