// Basic Setup
import React from "react"
import TodoCard from "./todoCard"

// Material UI
import { Grid } from "@material-ui/core"

// Types
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"
import { ITodo } from "@/types/todos.type"


const TodoList: React.FC = () => {
	const { todos } = useTypedSelector( state => state.todos )

	const allTodosSortedByDate = () => {
		const sortedTodos = [...todos]
		return sortedTodos.sort((a: ITodo, b: ITodo) =>  b.date - a.date)
	}

	return (
		<div style={{ paddingTop: 20 }}>
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