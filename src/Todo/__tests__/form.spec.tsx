import React from "react"
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react"


import TodoForm from "../form"
import { renderWithRedux } from "./helpers"

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