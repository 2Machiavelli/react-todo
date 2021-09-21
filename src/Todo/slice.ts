import { createSlice } from "@reduxjs/toolkit"

import { ITodosState, ITodo } from "@/Todo/types"

const initialState: ITodosState = {
	todos: [],
	completedTodos: []
}

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload)
		},
		editTodo(state, action) {
			state.todos = state.todos.map((item: ITodo) => {
				if (item.id === action.payload.id) {
					return action.payload
				}
		
				return item
			})
		},
		completeTodo(state, action) {
			state.completedTodos.push({ ...action.payload, isCompleted: true })

			state.todos = state.todos.filter((item: ITodo) => item.id != action.payload.id)
		},
		deleteTodo(state, action) {
			state.todos = state.todos.filter((item: ITodo) => item.id != action.payload.id)
		}
	}
})

export default todosSlice.reducer

export const {
	addTodo,
	completeTodo,
	editTodo,
	deleteTodo 
} = todosSlice.actions