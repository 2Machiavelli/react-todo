import { createStore } from "redux"
// @ts-ignore
import todos from "./reducers/root.reducer.ts"

const store = createStore(
	todos
)

export default store