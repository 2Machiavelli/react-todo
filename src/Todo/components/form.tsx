import React, { useState } from "react"
import { nanoid } from "nanoid"
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch } from "react-redux"

import { addTodo } from "@/Todo/slice"
import { ITodo } from "@/Todo/types"
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
	const title = useInput("", { minLength: 5, isEmpty: true, maxLength: 50 })
	const [description, setDescription] = useState("")


	const todo: ITodo = {
		id: nanoid(),
		title: title.value,
		description,
		date: Date.now(),
		isCompleted: false
	}
	
	const submit = (): void => {
		dispatch(addTodo(todo))

		title.setValue("")
		setDescription("")
		title.setValid(true)
		title.setDirty(false)
	}

	return (
		<form 
			className={classes.form} 
			noValidate
		>
			<TextField
				onBlur={() => title.onBlur()}
				onChange={e => title.onChange(e)}
				error={ title.isDirty && !title.isValid }
				helperText={ title.isDirty && !title.isValid ? title.errorMessage : "" }
				variant="outlined"
				margin="normal"
				required
				fullWidth
				label="Title"
				value={title.value}
				inputProps={{ "data-testid": "title-input" }}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				label="Description"
				value={description}
				onChange={e => setDescription(e.target.value)}
				inputProps={{ "data-testid": "description-input" }}
			/>
			<Button
				disabled={!title.isValid}
				variant="contained"
				color="primary"
				className={classes.submit}
				onClick={submit}
				role="btn-create"
			>
				Create
			</Button>
		</form>
	)
}

export default TodoForm