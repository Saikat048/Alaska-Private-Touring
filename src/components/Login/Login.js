import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password);
    }

    const [ signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
 
 

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) { 
        navigate(from, { replace: true }) 
    }


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail( auth );
    const handleForgotPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    if (sending) {
        return <h1 className='text-center mt-5'>Sending...</h1>;
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

                <button className='btn btn-link' onClick={handleForgotPassword}>Forgot password?</button> <br />

                <Button className='mt-4' variant="primary" type="submit">
                    Log In
                </Button> 
            </Form> 
            <ToastContainer />
        </div>
    );
};

export default Login;