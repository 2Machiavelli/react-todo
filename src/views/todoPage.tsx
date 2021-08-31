import React from "react"
import TodoForm from "@/components/todoForm"
import TodoList from "@/components/todoList"

import { Divider } from "@material-ui/core"


const TodoPage = () => (
	<>
		<TodoForm />
		<Divider />
		<TodoList />
	</>
)

export default TodoPage