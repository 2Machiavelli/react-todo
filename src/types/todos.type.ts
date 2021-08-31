export const CREATE_TODO = "TODO/CREATE_TODO"
export const EDIT_TODO = "TODO/EDIT_TODO"
export const COMPLETE_TODO = "TODO/COMPLETE_TODO"
export const DELETE_TODO = "TODO/DELETE_TODO"

export interface ITodo {
	id: string,
	title: string,
	description: string,
	date: number,
	isCompleted: boolean
}

export interface ITodosAction {
	type: string,
	payload: ITodo
}

export interface ITodosState {
	todos: ITodo[],
	completedTodos: ITodo[],
}
