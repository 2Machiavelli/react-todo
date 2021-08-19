import { createStore, compose } from "redux"
import { rootReducer } from "./reducers"
import persistState from "redux-localstorage"

const enhancer = compose(
	persistState()
)

const store = createStore(
	rootReducer,
	enhancer
)

export default store