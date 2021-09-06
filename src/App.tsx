import React from "react"
import TodoPage from "./views/todoPage" 
// Material UI
import { Container } from "@material-ui/core"

const App: React.FC = () => {
	return (
		<Container maxWidth="sm">
			<TodoPage />
		</Container>
	)
}

export default App