import {
	CREATE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	DELETE_TODO
// @ts-ignore
} from "../types.ts"

const initialState = {
	todos: [],
	completedTodos: []
}

// @ts-ignore
const todosReducer = (state = initialState, action) => {
	switch (action.type) {
	case CREATE_TODO:
		return { ...state }
	case EDIT_TODO:
		return { ...state }
	case COMPLETE_TODO:
		return { ...state }
	case DELETE_TODO:
		return { ...state }
	default: return state
	}
}

export default todosReducer