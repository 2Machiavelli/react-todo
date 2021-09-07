import { createStore, compose, combineReducers } from "redux"
import persistState from "redux-localstorage"
import todosSlice from "@/Todo/todoSlice"

const rootReducer = combineReducers({
	todos: todosSlice
})

const enhancer = compose(
	persistState()
)

const store = createStore(
	rootReducer,
	enhancer
)

export type RootState = ReturnType<typeof rootReducer>
export default store