import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';  
import CustomLink from '../CustomLink/CustomLink';
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
                            <CustomLink to="home">Home</CustomLink>
                            <CustomLink to="services">Services</CustomLink> 
                            <CustomLink to="about">About</CustomLink> 
                        </Nav>
                        <Nav>
                            <CustomLink to="login">Log In</CustomLink> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;