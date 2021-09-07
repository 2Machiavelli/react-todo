import React from "react"
import { Divider } from "@material-ui/core"

import Form from "@/Todo/form"
import List from "@/Todo/list"
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"


const TodoPage: React.FC = () => {
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