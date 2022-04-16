import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='alaska fw-bold'>ALASKA PRIVATE TOURING</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="home">Home</Link>
                            <Link to="services">Services</Link> 
                            <Link to="about">About</Link> 
                        </Nav>
                        <Nav>
                            <Link to="login">Log In</Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;