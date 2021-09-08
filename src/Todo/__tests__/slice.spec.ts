import reducer, { 
	addTodo,
	editTodo,
	completeTodo,
	deleteTodo
} from "../slice"
import { ITodosState } from "@/types/todos.type"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "title", 
	description: "description", 
	date: 1624471319925,
	isCompleted: false
}

describe("Todo Slice", () => {
	it("should add todo", () => {
		const initialState: ITodosState = {
			todos: [],
			completedTodos: []
		}

		expect(reducer(initialState, addTodo(todoData)).todos[0]).toBe(todoData)
	})

	it("should edit todo", () => {

		const updatedTodoData = {
			id: "G48a_bJwSi0SB6xSeJOtl", 
			title: "newTitle", 
			description: "newDescription", 
			date: 1624471319925,
			isCompleted: false
		}

		const initialState: ITodosState = {
			todos: [
				todoData
			],
			completedTodos: []
		}

		expect(reducer(initialState, editTodo(updatedTodoData)).todos[0]).toBe(updatedTodoData)
	})

	it("should complete todo", () => {
		const initialState: ITodosState = {
			todos: [
				todoData
			],
			completedTodos: []
		}

		expect(reducer(initialState, completeTodo(todoData)).completedTodos[0]).toStrictEqual({ ...todoData, isCompleted: true })
	})
	
	it("should delete todo", () => {
		const initialState: ITodosState = {
			todos: [
				todoData
			],
			completedTodos: []
		}

		expect(reducer(initialState, deleteTodo(todoData)).todos.length).toBe(0)
	})
	
})