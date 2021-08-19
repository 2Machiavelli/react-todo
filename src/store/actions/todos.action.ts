import { 
	CREATE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	DELETE_TODO,
	ITodo
} from "../../types/todos.type"

export const createTodoAction = ( todo: ITodo ) => {
	return {
		type: CREATE_TODO,
		payload: todo
	}
}

export const editTodoAction = ( todo: ITodo ) => {
	return {
		type: EDIT_TODO,
		payload: todo
	}
}

export const completeTodoAction = ( todo: ITodo ) => {
	return {
		type: COMPLETE_TODO,
		payload: todo
	}
}

export const deleteTodoAction = ( todo: ITodo ) => {
	return {
		type: DELETE_TODO,
		payload: todo
	}
}