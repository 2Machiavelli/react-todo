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
import { ITodo } from "@/types/todos.type"

// Redux
import { editTodoAction } from "../store/actions/todos.action"
import { useDispatch } from "react-redux"

interface ITodoEditDialogProps {
	todo: ITodo
}

const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))


const TodoEditDialog: React.FC<ITodoEditDialogProps> = ({todo}: { todo: ITodo }) => {
	const [open, setOpen] = useState(false)
	const [updatedTitle, setTitle] = useState(todo.title)
	const [updatedDescription, setDescription] = useState(todo.description)
	const dispatch = useDispatch()

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

	const submitForm = () => {
		if (!validateForm().isNotValid) {
			dispatch(editTodoAction(editedTodo))

			handleClose()
		}
	}

	const validateForm = () => {
		const trimmedTitle = updatedTitle.trim()

		if (trimmedTitle.length === 0) {
			return {
				isNotValid: true,
				errorText: "this field should not be empty"
			}
		}

		if (trimmedTitle.length <= 3) {
			return {
				isNotValid: true,
				errorText: "this field must have 3 or more digits"
			}
		}

		if (trimmedTitle.length > 60) {
			return {
				isNotValid: true,
				errorText: "this field must have not more than 60 digits"
			}
		}

		return {
			isNotValid: false
		}
	}

	return (
		<>
			<Button 
				size="small" 
				color="primary" 
				onClick={handleClickOpen}
			>
				Edit
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<form 
						className={classes.form} 
						noValidate
					>
						<TextField
							error={validateForm().isNotValid}
							variant="outlined"
							margin="normal"
							autoFocus
							required
							fullWidth
							label="Title"
							name="title"
							value={updatedTitle}
							onChange={event => setTitle(event.target.value)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							name="description"
							label="Description"
							value={updatedDescription}
							onChange={event => setDescription(event.target.value)}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button 
						onClick={handleClose} 
						color="primary"
					>
						Cancel
					</Button>
					<Button 
						onClick={submitForm} 
						color="primary" 
						autoFocus
					>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default TodoEditDialog