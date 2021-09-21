import React from "react"
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react"

import CardEditDialog from "@/Todo/components/editDialog"
import renderWithRedux from "./utils/renderWithRedux"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "title", 
	description: "description", 
	date: 1624471319925,
	isCompleted: false
}


describe("<EditCard />", () => {

	it("should check the props", () => {
		const { getByDisplayValue, getByRole } = renderWithRedux(<CardEditDialog todo={todoData}/>)

		const btnEdit = getByRole("btn-edit")
		fireEvent.click(btnEdit)

		const titleInput = getByDisplayValue("title") as HTMLInputElement
		const descriptionInput = getByDisplayValue("description") as HTMLInputElement
		
		expect(titleInput.value).toBe("title")
		expect(descriptionInput.value).toBe("description")
	})

	it("should check the reset btn", () => {
		const { getByDisplayValue, getByRole } = renderWithRedux(<CardEditDialog todo={todoData}/>)

		const btnEdit = getByRole("btn-edit")
		fireEvent.click(btnEdit)

		const titleInput = getByDisplayValue("title") as HTMLInputElement
		const descriptionInput = getByDisplayValue("description") as HTMLInputElement

		const btnReset = getByRole("btn-reset")
		fireEvent.click(btnReset)

		expect(titleInput.value).toBe("")
		expect(descriptionInput.value).toBe("")
	})

	it("should save the edited todo", () => {
		const { getByRole, store, getByTestId } = renderWithRedux(
			<CardEditDialog todo={todoData}/>,
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

		const titleInput = getByTestId("title-input")
		const descriptionInput = getByTestId("description-input")

		fireEvent.change(titleInput, {target: {value: "new title"}})
		fireEvent.change(descriptionInput, {target: {value: "new description"}})
		
		const btnSave = getByRole("btn-save")
		fireEvent.click(btnSave)

		expect(store.getState().todos[0].title).toBe("new title")
		expect(store.getState().todos[0].description).toBe("new description")
	})

})