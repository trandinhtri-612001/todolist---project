import React from 'react'
import LoginFrom from '../auth/LoginFrom'
import RegisterFrom from '../auth/RegisterFrom'
import './Auth.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router';
import Spinner from 'react-bootstrap/Spinner'


const Auth = ({authRoute}) => {
	let formbody;
	const { authState: { authLoading, isAuthenticated ,user} } = useContext(AuthContext)
	console.log(isAuthenticated)
	if (authLoading) {
		formbody = (
			<div className="d-flex justify-content-center mt-2">
				<Spinner animation= 'border' variant = 'info'/>
			</div>
		)
	}else if(isAuthenticated) return <Redirect to='/home'/>
	else
formbody = (	
    <>
    {authRoute === 'login' && <LoginFrom/>}
    {authRoute === 'register' && <RegisterFrom/>}


    </>
)

    return (
        
<div className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className = 'titleapp'>TODO APP</h1>
					<h4>Keep track of what you are learning</h4>
					{formbody}
				</div>
			</div>
		</div>


    
       
    )
}

export default Auth
