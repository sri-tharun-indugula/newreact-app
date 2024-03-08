import { DECREASE, INCBYNUMBER, INCREASE } from "./ActionTypes"

export const incrementCount = (payload) => {
    return {
        type: INCREASE
    }
}

export const decrementCount = () => {
    return {
        type: DECREASE
    }
}
export const increaseByNumber= (payload) => {
    return {
        type: INCBYNUMBER,
        payload
    }
}