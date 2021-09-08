import React from "react"
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react"

import TodoCard from "../card"
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
		const { getByRole } = renderWithRedux(<TodoCard todo={todoData}/>)

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

		expect(store.getState().completedTodos[0]).toEqual({...todoData, isCompleted: true})
		expect(store.getState().todos.length).toBe(0)
	})

})