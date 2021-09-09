import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import TodoCard from "./card"
import { ITodo } from "@/types/todos.type"
import getTodoDate from "@/Todo/components/utils/getTodoDate"

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