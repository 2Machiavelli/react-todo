import React from "react"
import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import TodoCardEditDialog from "../todoEditDialog"
import todoSlice from "../todoSlice"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "newTitle", 
	description: "newDescription", 
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

describe("<TodoEditCard />", () => {

	it("should check the props", () => {
		const { getByDisplayValue, getByRole } = renderWithRedux(<TodoCardEditDialog todo={todoData}/>)

		const btnEdit = getByRole("btn-edit")
		fireEvent.click(btnEdit)

		const titleInput = getByDisplayValue("newTitle") as HTMLInputElement
		const descriptionInput = getByDisplayValue("newDescription") as HTMLInputElement

		expect(titleInput.value).toBe("newTitle")
		expect(descriptionInput.value).toBe("newDescription")
	})

	it("should save the edited todo", () => {
		const { getByRole, store } = renderWithRedux(
			<TodoCardEditDialog todo={todoData}/>,
			{
				initialState: { 
					todos: [
						{
							id: "G48a_bJwSi0SB6xSeJOtl", 
							title: "title", 
							description: "description", 
							date: 1624471319925,
							isCompleted: false
						}
					],
					completedTodos: []
				}
			}
		)

		const btnEdit = getByRole("btn-edit")
		fireEvent.click(btnEdit)
		
		const btnSave = getByRole("btn-save")
		// save the todo date from the props
		fireEvent.click(btnSave)

		expect(store.getState().todos[0].title).toBe("newTitle")
		expect(store.getState().todos[0].description).toBe("newDescription")
	})

})