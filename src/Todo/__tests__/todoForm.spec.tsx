import React from "react"
import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import todoSlice from "../todoSlice"
import TodoForm from "../todoForm"

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


describe("<TodoForm />", () => {
	
	it("should create todo", () => {
		const { getByTestId, getByRole, store } = renderWithRedux(
			<TodoForm />,
			{
				initialState: { 
					todos: [],
					completedTodos: []
				}
			}
		)

		const titleInput = getByTestId("title-input")
		const descriptionInput = getByTestId("description-input")

		fireEvent.change(titleInput, {target: {value: "code the code"}})
		fireEvent.change(descriptionInput, {target: {value: "do your best"}})
		
		const btnCreate = getByRole("btn-create")
		
		fireEvent.click(btnCreate)
		
		expect(store.getState().todos[0].title).toBe("code the code")
		expect(store.getState().todos[0].description).toBe("do your best")
	})

})