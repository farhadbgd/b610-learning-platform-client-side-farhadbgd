import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Developer Program
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-auto">
                        <NavLink to={'/courses'} className="d-flex align-items-center px-2" style={{ textDecoration: 'none' }}>Courses</NavLink>
                        <NavLink className="d-flex align-items-center px-2" style={{ textDecoration: 'none' }}>Blog</NavLink>
                        <NavLink className="d-flex align-items-center px-2" style={{ textDecoration: 'none' }}>FAQ</NavLink>
                        <NavLink className="d-flex align-items-center px-2" style={{ textDecoration: 'none' }}>Toggle Theme</NavLink>
                        <NavLink className="d-flex align-items-center px-2" style={{ textDecoration: 'none' }}>Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;