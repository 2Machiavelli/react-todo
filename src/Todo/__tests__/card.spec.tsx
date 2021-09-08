import React from "react"
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react"

import Card from "@/Todo/components/card"
import { renderWithRedux } from "./helpers"

const todoData = {
	id: "G48a_bJwSi0SB6xSeJOtl", 
	title: "title", 
	description: "description", 
	date: 1624471319925,
	isCompleted: false
}

describe("<Card />", () => {

	it("should check the props", () => {
		const { getByRole } = renderWithRedux(<Card todo={todoData} todoDate="9/8/2021 | 18:04"/>)

		const title = getByRole("title")
		const description = getByRole("description")
		const todoDate = getByRole("todoDate")

		expect(title.textContent).toBe("title")
		expect(description.textContent).toBe("description")
		expect(todoDate.textContent).toBe("9/8/2021 | 18:04")
	})

	it("should check events", () => {
		const { getByRole, store } = renderWithRedux(
			<Card todo={todoData} todoDate="9/8/2021 | 18:04"/>,
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

		expect(store.getState().completedTodos[0]).toEqual({...todoData, isCompleted: true})
		expect(store.getState().todos.length).toBe(0)
	})

})