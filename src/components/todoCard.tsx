// Basic Setup
import React from "react"
import TodoEditDialog from "./todoEditDialog"

// Redux
import store from "../store"
import { 
	completeTodoAction,
	deleteTodoAction
} from "../store/actions/todos.action"

// Material UI
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

// Types
import { ITodo } from "@/types/todos.type"
import { useDispatch } from "react-redux"

interface ITodoCardProps {
	todo: ITodo
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

const TodoCard: React.FC<ITodoCardProps> = ({todo}: {todo: ITodo}) => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const getTodoDate = (): string => {
		const todoDate = new Date(todo.date)
		const minutes = todoDate.getMinutes()
		const updatedMinutes =  minutes >= 10 ? minutes : `0${ minutes }`

		return `${ todoDate.toLocaleDateString() } | ${ todoDate.getHours() }:${ updatedMinutes }`
	}

	const completeTodo = () => {
		dispatch(completeTodoAction(todo))
	}

	const deleteTodo = () => {
		dispatch(deleteTodoAction(todo))
	}

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography 
					gutterBottom 
					variant="h5" 
					component="h2"
				>
					{todo.title}
				</Typography>
				<Typography 
					gutterBottom 
					variant="subtitle1"
				>
					{getTodoDate()}
				</Typography>
				<Typography 
					variant="body2" 
					color="textSecondary" 
					component="p"
				>
					{todo.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button 
					size="small" 
					color="primary" 
					onClick={completeTodo}
				>
					Complete
				</Button>
				<TodoEditDialog todo={todo}/>
				<Button 
					size="small" 
					color="primary" 
					onClick={deleteTodo}
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	)
}

export default TodoCard