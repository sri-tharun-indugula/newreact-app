import { createStore, configureStore } from "redux"
import { countReducer } from "./Reducers"

export const store = createStore(countReducer)