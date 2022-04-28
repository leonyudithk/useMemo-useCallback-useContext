import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Manejo de Hooks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/memorize"><Nav.Link href="#home"> Memo</Nav.Link> </Link>
                            <Link to="/memorizeHook"><Nav.Link href="#home">Use Memo</Nav.Link> </Link>
                            <Link to="/callback"><Nav.Link href="#home">Use Callbacks</Nav.Link> </Link>
                            <Link to="/padre"><Nav.Link href="#home">Padre</Nav.Link> </Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;