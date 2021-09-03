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
import useInput from "@/hooks/useInput.hook"

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
	const updatedTitle = useInput(todo.title, { minLength: 5, isEmpty: true, maxLength: 50 })
	const [updatedDescription, setDescription] = useState(todo.description)
	const dispatch = useDispatch()

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {

		updatedTitle.setValue(todo.title)
		setDescription(todo.description)
		setOpen(false)
	}

	const classes = useStyles()

	const editedTodo: ITodo = {
		id: todo.id,
		title: updatedTitle.value,
		description: updatedDescription,
		isCompleted: false,
		date: Date.now()
	}

	const submit = () => {
		dispatch(editTodoAction(editedTodo))

		handleClose()
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
							onBlur={e => updatedTitle.onBlur(e)}
							onChange={e => updatedTitle.onChange(e)}
							error={ updatedTitle.isDirty && !updatedTitle.isValid }
							helperText={ updatedTitle.isDirty && !updatedTitle.isValid ? updatedTitle.errorMessage : "" }
							variant="outlined"
							margin="normal"
							autoFocus
							required
							fullWidth
							label="Title"
							name="title"
							value={updatedTitle.value}
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
						onClick={submit} 
						color="primary" 
						autoFocus
						disabled={!updatedTitle.isValid}
					>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default TodoEditDialog