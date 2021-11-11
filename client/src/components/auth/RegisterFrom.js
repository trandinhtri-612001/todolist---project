import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link,useHistory  } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/alertmessage'


const RegisterForm = () => {
	const history = useHistory();
	const {registerUser} = useContext(AuthContext)
// data aleat
	 const [Alert, setAlert] = useState(null)
	const [registerform, setregisterform] = useState({
		username: '',
		password: '',
		confirmPassword:''
	})
	console.log(registerform)

		const { username, password, confirmPassword } = registerform
	
	const onchangeregisterform = (e) => {
		setregisterform({ ...registerform, [e.target.name]: e.target.value })
		

	}

	

	const registeruser = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setAlert({ type: 'danger ', message: ' password do not match' })
			setTimeout(() => {
				setAlert(null)
			}, 3000);
			return(0)
		}
		try {
			
				const registerdata = await registerUser(registerform)
			console.log(registerdata)
			if (registerdata.success) {
				setAlert({ type: 'success', message: `${registerdata.message}`})
				setTimeout(() => {
					setAlert(null)
					history.push('/login')
				}, 2000);
			} else {
				setAlert({ type: 'danger', message: `${registerdata.message}` })
								setTimeout(() => {
					setAlert(null)
				}, 3000);
			}
				
		} catch (error) {
			return error.data.message
		}
	}



	return (
		<>
			<Form className='my-4' onSubmit = {registeruser}>
			<AlertMessage info = {Alert}/>

				<Form.Group className='my-4'>
					<Form.Control
						type='text'
						placeholder='Username'
						name='username'
						required
						value={username}
						onChange = {onchangeregisterform}

					/>
				</Form.Group>
				<Form.Group className='my-4'>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						required
						value = {password}
					onChange = {onchangeregisterform}
					/>
				</Form.Group>
				<Form.Group className= 'my-4'>
					<Form.Control
						type='password'
						placeholder='Confirm Password'
						name='confirmPassword'
						required
						value={confirmPassword}
						onChange = {onchangeregisterform}
			
					/>
				</Form.Group>
				<Button variant='success' type='submit'>
					Register
				</Button>
			</Form>
			<p>
				Already have an account?
				<Link to='/login'>
					<Button variant='info' size='sm' className='ml-2'>
						Login
					</Button>
				</Link>
			</p>
		</>
	)
}

export default RegisterForm