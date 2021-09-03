import { useEffect, useState } from "react"

const useValidation = (value, validations = {}) => {
	const trimmedValue = value.trim()
	const [isEmpty, setEmpty] = useState(true)
	const [minLengthError, setMinLengthError] = useState(false)
	const [maxLengthError, setMaxLengthError] = useState(false)
	const [isValid, setValid] = useState(true)
	const [errorMessage, setErrorMessage] = useState("")

	useEffect(() => {
		const errorMsgs: string[] = []

		for (const validation in validations) {
			

			if (validation === "minLength") {

				if (trimmedValue.length <= validations[validation] && trimmedValue.length > 0) {
					setMinLengthError(true)
					errorMsgs.push(`the field has to contained more than ${validations[validation]} digits`)
				} else {
					setMinLengthError(false)
				}

			}

			if (validation === "maxLength") {

				if (trimmedValue.length > validations[validation]) {
					setMaxLengthError(true)
					errorMsgs.push(`the field has to not contained more than ${validations[validation]} digits`)
				} else {
					setMaxLengthError(false)
				}

			}

			if (validation === "isEmpty") {

				if (trimmedValue.length === 0) {
					setEmpty(true)
					errorMsgs.push("the field must be not empty")
				} else {
					setEmpty(false)
				}

			} 

		}

		if (errorMsgs.length > 0) {
			setErrorMessage(errorMsgs[0])
			setValid(false)
		} else {
			setValid(true)
		}

	}, [value])

	return {
		isValid,
		isEmpty,
		minLengthError,
		errorMessage,
		setValid,
		setErrorMessage
	}

}

const useInput = (initValue, validations = {}) => {
	const [value, setValue] = useState(initValue)
	const [isDirty, setDirty] = useState(false)
	const valid = useValidation(value, validations)

	const onChange = (e) => {
		setValue(e.target.value)
	}

	const onBlur = (e) => {
		setDirty(true)
	}

	return {
		value,
		isDirty,
		...valid,
		onChange,
		onBlur,
		setValue,
		setDirty
	}
}

export default useInput