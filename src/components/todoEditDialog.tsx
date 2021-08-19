// Basic Setup
import React, { useState } from "react"

// Material UI
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import { makeStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"

// Types
// @ts-ignore
import { ITodo } from "@/store/types/todos.type"

// Redux
import store from "../store"
import { editTodoAction } from "../store/actions/todos.action"


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const todoEditDialog = ({todo}) => {
	const [open, setOpen] = useState(false)
	const [updatedTitle, setTitle] = useState(todo.title)
	const [updatedDescription, setDescription] = useState(todo.description)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const classes = useStyles()

	const editedTodo: ITodo = {
		id: todo.id,
		title: updatedTitle,
		description: updatedDescription,
		isCompleted: false,
		date: Date.now()
	}

	const save = () => {
		store.dispatch(editTodoAction(editedTodo))

		handleClose()
	}

	return (
		<div>
			<Button size="small" color="primary" onClick={handleClickOpen}>
				Edit
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="Title"
							name="title"
							autoComplete="title"
							autoFocus
							value={updatedTitle}
							onChange={event => setTitle(event.target.value)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							name="description"
							label="Description"
							autoComplete="description"
							value={updatedDescription}
							onChange={event => setDescription(event.target.value)}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={save} color="primary" autoFocus>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default todoEditDialog