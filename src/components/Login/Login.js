import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const Navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
        createUserWithEmailAndPassword(email, password);
    }

    const handleFormSubmit = e => {
        e.preventDefault()
    }

    const [ createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        Navigate(from, { replace: true }) 
    }
    return (
        <div>
            <h1 className='text-primary text-center fw-bold mt-5'>Log In</h1>
            <Form onSubmit={handleFormSubmit} className='w-50 mx-auto border p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/> 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                </Form.Group>  
                <p className='text-danger'>{error?.message}</p>
                <p>New to Alaska? <Link to="/signup">Please Sign Up</Link></p>

                <Link to="/">Forgot password?</Link> <br />

                <Button className='mt-4' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
};

export default Login;