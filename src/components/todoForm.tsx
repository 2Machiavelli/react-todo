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
import useInput from "@/hooks/useInput.hook"


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
	let title = useInput("", { minLength: 5, isEmpty: true, maxLength: 50 })
	let [description, setDescription] = useState("")


	const todo: ITodo = {
		id: nanoid(),
		title: title.value,
		description,
		date: Date.now(),
		isCompleted: false
	}
	
	const submit = (): void => {
		dispatch(createTodoAction(todo))

		title.setValue("")
		setDescription("")
	}

	return (
		<form 
			className={classes.form} 
			noValidate
		>
			<TextField
				onBlur={e => title.onBlur(e)}
				onChange={e => title.onChange(e)}
				error={ title.isDirty && !title.isValid }
				helperText={ title.isDirty && !title.isValid ? title.errorMessage : "" }
				variant="outlined"
				margin="normal"
				required
				fullWidth
				label="Title"
				value={title.value}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				label="Description"
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<Button
				disabled={!title.isValid}
				variant="contained"
				color="primary"
				className={classes.submit}
				onClick={submit}
			>
				Create
			</Button>
		</form>
	)
}

export default TodoForm