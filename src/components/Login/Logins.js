import React, { useState, useEffect, useReducer } from 'react'
import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

//debouncing, debounce

const loginReducer = (prevState, action) => {
	if (action.type === 'USER INPUT') {
		return {
			...prevState,
			value: action.emailValue,
		
		}
	}
	if (action.type === 'INPUT_BLUR') {
		return {
		   ...prevState,
			isValid: prevState.value.includes('@'),
		}
	}

	if (action.type === 'USER_PASSWORD') {
		return {
			...prevState,
			value2: action.passwordValue,
		
		}
	}
	if (action.type === 'PASSWORD_BLUR') {
		return {
		   ...prevState,
			isValid2: prevState.value2.trim().length > 6,
		}
	}
	return {
		isValid: false,
		value: '',

		isValid2: false,
		value2: '',
	}
}

const Logins = (props) => {
	const [loginState, dispatchLoginState] = useReducer(loginReducer, {
		isValid: '',
		value: '',

		isValid2: '',
		value2: '',
	})

	const [formIsValid, setFormIsValid] = useState(false) 

	useEffect(() => {
		const timer = setTimeout(() => {
			setFormIsValid(
				loginState.value.includes('@') &&
					loginState.value2.trim().length > 6,
			)
			console.log('changed')
		}, 3000)
		// clean up function
		return () => {
			clearTimeout(timer) 
		}
	}, [loginState.value, loginState.value2])

	const emailChangeHandler = (event) => {
		dispatchLoginState({
			type: 'USER INPUT',
			emailValue: event.target.value,
		})
	}

	const passwordChangeHandler = (event) => {
		dispatchLoginState({
			type: 'USER_PASSWORD',
			passwordValue: event.target.value,
		})
	}

	const validateEmailHandler = () => {
		dispatchLoginState({ type: 'INPUT_BLUR' })
	}

	const validatePasswordHandler = () => {
		dispatchLoginState({ type: 'PASSWORD_BLUR' })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		props.onLogin(loginState)
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						loginState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={loginState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler} 
					/>
				</div>
				<div
					className={`${classes.control} ${
						loginState.isValid2 === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={loginState.value2}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler} 
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}
export default Logins