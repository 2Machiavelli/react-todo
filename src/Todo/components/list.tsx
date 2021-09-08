import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import TodoCard from "./card"
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

	const getTodoDate = (todo: ITodo): string => {
		const todoDate = new Date(todo.date)
		const minutes = todoDate.getMinutes()
		const updatedMinutes =  minutes >= 10 ? minutes : `0${ minutes }`

		return `${ todoDate.toLocaleDateString() } | ${ todoDate.getHours() }:${ updatedMinutes }`
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
					todos.map((todo: ITodo) => {
						return <TodoCard 
							key={todo.id} 
							todo={todo}
							todoDate={getTodoDate(todo)} 
						/>
					})
				}
			</Grid>
		</div>
	)
}

export default TodoList