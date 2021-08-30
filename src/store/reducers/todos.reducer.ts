import {
	CREATE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	DELETE_TODO,
	ITodosAction,
	ITodosState,
	ITodo
} from "../../types/todos.type"

const initialState: ITodosState = {
	todos: [],
	completedTodos: []
}


const addTodo = (state, action: ITodosAction) => {
	const updatedTodos = [ ...state.todos, action.payload ]

	return { todos: [ ...updatedTodos ], completedTodos: [ ...state.completedTodos ] }
}

const editTodo = (state, action: ITodosAction) => {
	const updatedTodos = state.todos.map((item: ITodo) => {
		if (item.id === action.payload.id) {
			return action.payload
		}

		return item
	})

	return { todos: [ ...updatedTodos ], completedTodos: [ ...state.completedTodos ] }
}

const completeTodo = (state, action: ITodosAction) => {
	const updatedCompletedTodos = [ ...state.completedTodos, { ...action.payload, isCompleted: true } ]

	const updatedTodos = [ ...state.todos.filter((item: ITodo) => item.id != action.payload.id ) ]

	return { todos: [ ...updatedTodos ], completedTodos: [ ...updatedCompletedTodos ] }
}

const deleteTodo = (state, action: ITodosAction) => {
	const updatedTodos = state.todos.filter((item: ITodo) => item.id != action.payload.id )

	return { todos: [ ...updatedTodos ], completedTodos: [ ...state.completedTodos ] }
}

const todosReducer = (state = initialState, action: ITodosAction): ITodosState => {
	switch (action.type) {
	case CREATE_TODO:
		return addTodo(state, action)
	case EDIT_TODO:
		return editTodo(state, action)
	case COMPLETE_TODO:
		return completeTodo(state, action)
	case DELETE_TODO:
		return deleteTodo(state, action)
	default: return state
	}
}

export default todosReducer