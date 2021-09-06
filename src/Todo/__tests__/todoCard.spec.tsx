import React from "react"
import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "@/store"
import { createStore } from "redux"

import TodoCard from "../todoCard"
import todoSlice from "../todoSlice"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "title", 
	description: "description", 
	date: 1624471319925,
	isCompleted: false
}

const renderWithRedux = (
	component,
	{ initialState = {}, store = createStore(todoSlice, initialState) } = {}
) => {
	return {
		...render(
			<Provider store={store}>
				{component}
			</Provider>
		),
		store
	}
}


describe("<TodoCard />", () => {

	it("should check the props", () => {
		const { getByRole } = render(
			<Provider store={store}>
				<TodoCard todo={todoData}/>
			</Provider>
		)

		const title = getByRole("title")
		const description = getByRole("description")
		const todoDate = getByRole("todoDate")

		expect(title.textContent).toBe("title")
		expect(description.textContent).toBe("description")
		expect(todoDate.textContent).toBe("6/23/2021 | 21:01")
	})

	it("should check events", () => {
		const { getByRole, store } = renderWithRedux(
			<TodoCard todo={todoData}/>,
			{
				initialState: { 
					todos: [
						todoData
					],
					completedTodos: []
				}
			}
		)

		const btnComplete = getByRole("btn-complete")
		const btnDelete = getByRole("btn-delete")

		fireEvent.click(btnComplete)
		fireEvent.click(btnDelete)

		expect(store.getState().completedTodos[0]).toEqual(todoData)
		expect(store.getState().todos.length).toBe(0)
	})

})