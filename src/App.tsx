// node_modules/react
import React from "react"
// node_modules/material-ui
import { Container } from "@material-ui/core"

// components
import TodoPage from "@/Todo/todoPage" 

const App: React.FC = () => {
	return (
		<Container maxWidth="sm">
			<TodoPage />
		</Container>
	)
}

export default App