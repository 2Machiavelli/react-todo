import React, { ReactElement } from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { render } from "@testing-library/react"

import todoSlice from "../slice"

export const renderWithRedux = (
	component: ReactElement,
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
