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
	completedTodos: ITodo[]
}
