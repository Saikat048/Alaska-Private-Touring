import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'; 

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ALASKA PRIVATE TOURING</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link> 
                            <Nav.Link href="#pricing">About</Nav.Link> 
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Log In</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;