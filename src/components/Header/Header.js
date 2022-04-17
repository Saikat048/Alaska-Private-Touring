import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='alaska fw-bold'>ALASKA PRIVATE TOURING</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink to="home">Home</CustomLink>
                            <CustomLink to="services">Services</CustomLink>
                            <CustomLink to="service/:serviceId">Service Detail</CustomLink>
                            <CustomLink to="blogs">Blogs</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink to="about">About</CustomLink>
                            {
                                user ? <CustomLink onClick={handleLogOut} to="login">Log Out</CustomLink>
                                    :
                                    <CustomLink to="login">Log In</CustomLink>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;