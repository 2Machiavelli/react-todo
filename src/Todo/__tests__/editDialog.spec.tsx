import React from "react"
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react"

import CardEditDialog from "@/Todo/components/editDialog"
import { renderWithRedux } from "./helpers"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "newTitle", 
	description: "newDescription", 
	date: 1624471319925,
	isCompleted: false
}


describe("<EditCard />", () => {

	it("should check the props", () => {
		const { getByDisplayValue, getByRole } = renderWithRedux(<CardEditDialog todo={todoData}/>)

		const btnEdit = getByRole("btn-edit")
		fireEvent.click(btnEdit)

		const titleInput = getByDisplayValue("newTitle") as HTMLInputElement
		const descriptionInput = getByDisplayValue("newDescription") as HTMLInputElement

		expect(titleInput.value).toBe("newTitle")
		expect(descriptionInput.value).toBe("newDescription")
	})

	it("should save the edited todo", () => {
		const { getByRole, store } = renderWithRedux(
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
		
		const btnSave = getByRole("btn-save")
		// save the todo date from the props
		fireEvent.click(btnSave)

		expect(store.getState().todos[0].title).toBe("newTitle")
		expect(store.getState().todos[0].description).toBe("newDescription")
	})

})