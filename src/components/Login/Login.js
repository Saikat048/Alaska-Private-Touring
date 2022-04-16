import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className='text-primary text-center fw-bold mt-5'>Log In</h1>
            <Form className='w-50 mx-auto border p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/> 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>  
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