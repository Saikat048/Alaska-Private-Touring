import { GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
 
    const [users, setUsers] = useState()

    const provider = new GoogleAuthProvider(auth);


    if(users){
        navigate('/home')
    }
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUsers(user)
            })
            .catch(error => {
                setError(error)
            })
    }


    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleFormSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Password did not match')
            return;
        }
        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
    }


    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <h2 className='text-primary text-center fw-bold mt-5'>Sign Up</h2>
            <Form onSubmit={handleFormSubmit} className='w-50 mx-auto border p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p>Already have an account? <Link to="/login">Please Log In</Link></p>
                <Button className='mb-5' variant="primary" type="submit">
                    Sign Up
                </Button>
                <div className='d-flex w-50 mx-auto my-5'>
                    <div>
                        <hr></hr>
                    </div>
                    <div>or</div>
                    <div>
                        <hr></hr>
                    </div>
                </div>


            </Form>
            <Button onClick={googleSignIn} className='d-block mx-auto' variant="primary" type="submit">
                Sign In With Google
            </Button>
        </div>
    );
};

export default Signup;