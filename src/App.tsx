import React from "react"
import { Container } from "@material-ui/core"

import TodoPage from "@/Todo/todoPage" 

const App: React.FC = () => {
	return (
		<Container maxWidth="sm">
			<TodoPage />
		</Container>
	)
}

export default App