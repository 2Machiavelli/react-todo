import React from "react"
import TodoForm from "@/components/todo/todoForm"
import TodoList from "@/components/todo/todoList"

import { Divider } from "@material-ui/core"


const TodoPage = () => (
	<>
		<TodoForm />
		<Divider />
		<TodoList />
	</>
)

export default TodoPage