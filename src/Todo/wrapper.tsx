import React from "react"
import { Divider } from "@material-ui/core"

import Form from "@/Todo/components/form"
import List from "@/Todo/components/list"
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"
import { ITodo } from "@/types/todos.type"


const TodoPage: React.FC = () => {

	const { todos } = useTypedSelector( state => state.todos )

	const allTodosSortedByDate = () => {
		const sortedTodos = [...todos]
		return sortedTodos.sort((a: ITodo, b: ITodo) =>  b.date - a.date)
	}

	return (
		<>
			<Form />
			<Divider />
			<List todos={allTodosSortedByDate()}/>
		</>
	)
}

export default TodoPage