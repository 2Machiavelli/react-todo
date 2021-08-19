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
// @ts-ignore
import { ITodo } from "@/types/todos.type"

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	media: {
		height: 140,
	}
})

const TodoCard = ({todo}: {todo: ITodo}) => {
	const classes = useStyles()

	const getTodoDate = (): string => {
		const todoDate = new Date(todo.date) 
		const minutes =  todoDate.getMinutes() >= 10 ? todoDate.getMinutes() : `0${ todoDate.getMinutes() }`
		return `${ todoDate.toLocaleDateString() } | ${ todoDate.getHours() }:${ minutes }`
	}

	const completeTodo = () => {
		store.dispatch(completeTodoAction(todo))
	}

	const deleteTodo = () => {
		store.dispatch(deleteTodoAction(todo))
	}

	return (
		<Card className={classes.root} style={{ marginBottom: 20 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{todo.title}
				</Typography>
				<Typography gutterBottom variant="subtitle1">
					{getTodoDate()}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{todo.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary" onClick={completeTodo}>
					Complete
				</Button>
				<TodoEditDialog todo={todo}/>
				<Button size="small" color="primary" onClick={deleteTodo}>
					Delete
				</Button>
			</CardActions>
		</Card>
	)
}

export default TodoCard