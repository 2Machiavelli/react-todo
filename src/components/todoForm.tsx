// Basic Setup
import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"

// Material UI
import {
	TextField,
	Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { createTodoAction } from "../store/actions/todos.action"

// Types
import { ITodo } from "../types/todos.type"
import { useDispatch } from "react-redux"


const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	}
}))

const TodoForm: React.FC = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	let [title, setTitle] = useState("")
	let [description, setDescription] = useState("")
	let [titleDirty, setTitleDirty] = useState(false)
	let [titleError, setTitleError] = useState("this field should not be empty")
	let [formValid, setFormValid] = useState(false)

	const todo: ITodo = {
		id: nanoid(),
		title,
		description,
		date: Date.now(),
		isCompleted: false
	}

	useEffect(() => {
		
		if(titleError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
		
	}, [titleError])
	
	const submitForm = (): void => {
		if (!titleError) {
			dispatch(createTodoAction(todo))

			setTitle("")
			setDescription("")
			setTitleDirty(false)
			setTitleError("this field should not be empty")
		}
	}

	const titleHandler = (e) => {
		const value = e.target.value.trim()

		setTitle(e.target.value)

		if (value.length === 0) {
			return setTitleError("this field should not be empty")
		}

		if (value.length < 3) {
			return setTitleError("this field must have 3 or more digits")
		}

		if (value.length > 60) {
			return setTitleError("this field must have not more than 60 digits")
		}

		setTitleError("")
	}

	const blurTitle = (): void => {
		setTitleDirty(true)
	}

	return (
		<form 
			className={classes.form} 
			noValidate
		>
			<TextField
				onBlur={e => blurTitle()}
				error={titleDirty && !!titleError}
				helperText={titleDirty ? titleError : ""}
				variant="outlined"
				margin="normal"
				required
				fullWidth
				label="Title"
				value={title}
				onChange={event => titleHandler(event)}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				label="Description"
				value={description}
				onChange={event => setDescription(event.target.value)}
			/>
			<Button
				disabled={!formValid}
				variant="contained"
				color="primary"
				className={classes.submit}
				onClick={submitForm}
			>
				Create
			</Button>
		</form>
	)
}

export default TodoForm