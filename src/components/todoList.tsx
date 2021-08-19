// Basic Setup
import React from "react"
import TodoCard from "./todoCard"

// Material UI
import { Grid } from "@material-ui/core"

// Types
import { useTypedSelector } from "@/hooks/useTypedSelector"
// @ts-ignore
import { ITodo } from "@/types/todos.type"


const TodoList: React.FC = () => {
	// @ts-ignore
	const { todos } = useTypedSelector( state => state.todos )

	const allTodosSortedByDate = () => {
		const sortedTodos = [...todos]
		return sortedTodos.sort((a, b) =>  b.date - a.date)
	}

	return (
		<div className="todo-list" style={{ paddingTop: 20 }}>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				{ 
					allTodosSortedByDate().map((value: ITodo) => {
						return <TodoCard key={value.id} todo={value} />
					})
				}
			</Grid>
		</div>
	)
}

export default TodoList