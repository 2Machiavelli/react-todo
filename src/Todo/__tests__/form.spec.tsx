import React from "react"
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react"


import Form from "@/Todo/components/form"
import renderWithRedux from "./utils/renderWithRedux"

describe("<Form />", () => {
	
	it("should create todo", () => {
		const { getByTestId, getByRole, store } = renderWithRedux(
			<Form />,
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