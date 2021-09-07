// Basic Setup
import React from "react"
import TodoCard from "./todoCard"

// Material UI
import { Grid, makeStyles } from "@material-ui/core"

// Types
import { ITodo } from "@/types/todos.type"

const useStyles = makeStyles(() => ({
	todoList: {
		paddingTop: 20
	}
}))

interface ITodoCardProps {
	todos: ITodo[]
}

const TodoList: React.FC<ITodoCardProps> = ({todos}: {todos: ITodo[]}) => {
	const classes = useStyles()
	const allTodosSortedByDate = () => {
		const sortedTodos = [...todos]
		return sortedTodos.sort((a: ITodo, b: ITodo) =>  b.date - a.date)
	}

	return (
		<div className={classes.todoList}>
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