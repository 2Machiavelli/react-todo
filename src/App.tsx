import React from "react"
import TodoPage from "./views/todoPage"
import {
	Switch,
	Route,
	Redirect
} from "react-router-dom"

// Material UI
import { Container } from "@material-ui/core"

const App: React.FC = () => {
	return (
		<Container maxWidth="sm">
			<Switch>
				<Route path="/">
					<Redirect to="/todo_page" />
				</Route>
			</Switch>
			<Switch>
				<Route path="/todo_page">
					<TodoPage />
				</Route>
			</Switch>
		</Container>
	)
}

export default App