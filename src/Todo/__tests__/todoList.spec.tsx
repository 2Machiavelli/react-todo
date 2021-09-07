// node_modules/react
import React from "react"
// node_modules/testing
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
// node_modules/redux
import { Provider } from "react-redux"
import { createStore } from "redux"

// slice
import todoSlice from "../slice"

// component
import TodoList from "../list"


const todos = [
	{
		id: "G48a_bJwSi0SB6xSeJOtl", 
		title: "titleOne", 
		description: "description", 
		date: 1624471319485,
		isCompleted: false
	},
	{
		id: "G48a_bJwSi0SB6xSeJOtl", 
		title: "titleTwo", 
		description: "description", 
		date: 1624471319989,
		isCompleted: false
	},						{
		id: "G48a_bJwSi0SB6xSeJOtl", 
		title: "titleThree", 
		description: "description", 
		date: 1624471319929,
		isCompleted: false
	}
]

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

describe("<TodoList />", () => {
	
	it("should render three todos", () => {
		const { getAllByRole } = renderWithRedux(<TodoList todos={todos} />)

		const todoCards = getAllByRole("todo-card")

		expect(todoCards.length).toBe(3)
	})

})