import { combineReducers } from "redux"
// @ts-ignore
import todosReducer from "./todos.reducer.ts"

const rootReducer = combineReducers({
	todos: todosReducer
})

export default rootReducer