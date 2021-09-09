import React from "react"
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import TodoEditDialog from "./editDialog"
import { completeTodo, deleteTodo } from "@/Todo/slice"
import { ITodo } from "@/Todo/types"

interface ITodoCardProps {
	todo: ITodo,
	todoDate: string
}

const useStyles = makeStyles({
	root: {
		width: "100%",
		marginBottom: 20
	},
	media: {
		height: 140,
	}
})

const TodoCard: React.FC<ITodoCardProps> = ({todo, todoDate}: {todo: ITodo, todoDate: string}) => {
	const classes = useStyles()
	const dispatch = useDispatch()

	return (
		<Card className={classes.root} role="todo-card">
			<CardContent>
				<Typography 
					gutterBottom 
					variant="h5" 
					component="h2"
					role="title"
				>
					{todo.title}
				</Typography>
				<Typography 
					gutterBottom 
					variant="subtitle1"
					role="todoDate"
				>
					{todoDate}
				</Typography>
				<Typography 
					variant="body2" 
					color="textSecondary" 
					component="p"
					role="description"
				>
					{todo.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button 
					size="small" 
					color="primary" 
					onClick={() => dispatch(completeTodo(todo))}
					role="btn-complete"
				>
					Complete
				</Button>
				<TodoEditDialog todo={todo}/>
				<Button 
					size="small" 
					color="primary" 
					onClick={() => dispatch(deleteTodo(todo))}
					role="btn-delete"
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	)
}

export default TodoCard