import { useDispatch, useSelector } from "react-redux"
import { decrementCount, increaseByNumber, incrementCount } from "../store/Actions"
import { useState } from "react"

const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [value, setValue] = useState("")
    const handleIncrementClick = () => {
        dispatch(incrementCount())
    }
    const handleDecrementClick = () => {
        dispatch(decrementCount())
    }
    const handleIncrementByNumber = () => {
        dispatch(increaseByNumber(Number(value)))
    }
    return <div>
        <h1>COUNTER COMPONENT</h1>
        <button onClick={handleIncrementClick}>INCREAE</button>
        <button onClick={handleDecrementClick}>DECREASE</button>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleIncrementByNumber}>ADD </button>
        <h3>COUNT:::: {state.count}</h3>
    </div>
}

export default Counter