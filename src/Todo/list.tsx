// node_modules/react
import React from "react"
// node_modules/material-ui
import { Grid, makeStyles } from "@material-ui/core"

// components
import TodoCard from "./card"

// types
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