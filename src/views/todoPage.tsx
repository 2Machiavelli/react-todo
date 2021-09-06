import React from "react"
import TodoForm from "@/Todo/todoForm"
import TodoList from "@/Todo/todoList"

import { Divider } from "@material-ui/core"
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"


const TodoPage = () => {
	const { todos } = useTypedSelector( state => state.todos )

	return (
		<>
			<TodoForm />
			<Divider />
			<TodoList todos={todos}/>
		</>
	)
}

export default TodoPage