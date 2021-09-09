import React from "react"
import { Divider } from "@material-ui/core"

import Form from "@/Todo/components/form"
import List from "@/Todo/components/list"
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"
import sortAllTodoByDate from "./components/utils/sortAllTodoByDate"


const TodoPage: React.FC = () => {

	const { todos } = useTypedSelector( state => state.todos )

	return (
		<>
			<Form />
			<Divider />
			<List todos={sortAllTodoByDate(todos)}/>
		</>
	)
}

export default TodoPage