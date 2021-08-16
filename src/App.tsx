import React from "react"
// @ts-ignore
import TodoPage from "./views/todoPage.tsx"

import {
	Switch,
	Route,
	Redirect
} from "react-router-dom"

const App = () => {
	return (
		<div>
			<Switch>
				<Route path="/">
					<Redirect to="/todo_page" />
				</Route>
				<Route path="/todo_page">
					<TodoPage />
				</Route>
			</Switch>
		</div>
	)
}

export default App