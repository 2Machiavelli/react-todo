// node_modules/react
import React from "react"
// node_modules/material-ui
import { Divider } from "@material-ui/core"

// components
import Form from "@/Todo/form"
import List from "@/Todo/list"

// custom hooks
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"


const TodoPage = () => {
	// @ts-ignore
	const { todos } = useTypedSelector( state => state.todos )

	return (
		<>
			<Form />
			<Divider />
			<List todos={todos}/>
		</>
	)
}

export default TodoPage