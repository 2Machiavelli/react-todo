/* eslint-disable */
import { combineReducers } from "redux"
import todosReducer from "./todos.reducer"

export const rootReducer = combineReducers({
	todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>