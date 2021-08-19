// Basic Setup
/* eslint-disable */
import React, { useState } from "react"
import { nanoid } from "nanoid"

// Material UI
import {
	TextField,
	Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import store from "../store"
import { createTodoAction } from "../store/actions/todos.action"

// Types
import { useTypedSelector } from "@/hooks/useTypedSelector"
// @ts-ignore
import { ITodo } from "@/types/todos.type"




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
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const TodoForm = () => {
	const classes = useStyles()
	let [title, setTitle] = useState("")
	let [description, setDescription] = useState("")

	const todo: ITodo = {
		id: nanoid(),
		title,
		description,
		date: Date.now(),
		isCompleted: false
	}
	
	const submitForm = () => {
		if (!validateForm().isNotValid) {
			store.dispatch(createTodoAction(todo))

			setTitle("")
			setDescription("")
		}
	}

	const validateForm = () => {
		const trimmedTitle = title.trim()

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
		<div className="todo-form">
			<form className={classes.form} id="add-todo-form">
				<TextField
					error={validateForm().isNotValid}
					helperText={validateForm().isNotValid ? validateForm().errorText : ""}
					variant="outlined"
					margin="normal"
					required
					fullWidth
					label="Title"
					name="title"
					autoComplete="title"
					autoFocus
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					name="description"
					label="Description"
					autoComplete="description"
					value={description}
					onChange={event => setDescription(event.target.value)}
				/>
				<Button
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
					onClick={submitForm}
				>
					Create
				</Button>
			</form>
		</div>
	)
}

export default TodoForm