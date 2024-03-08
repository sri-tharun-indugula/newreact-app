import { DECREASE, INCBYNUMBER, INCREASE } from "./ActionTypes"

const initialState = {
    count : 0
}


export const countReducer = (state = initialState, action) => {
    console.log("ACTION:::", action)
    switch (action.type)  {
        case INCREASE: {
            const newCount = state.count +1
            return {...state,count: newCount}
        }
        case DECREASE: {
            const newCount = state.count -1
            return {...state,count: newCount}
        }
        case INCBYNUMBER: {
            
            const newCount = state.count + action.payload
            return {...state,count: newCount}
        }
        default: {
            return state
        }
    }
}