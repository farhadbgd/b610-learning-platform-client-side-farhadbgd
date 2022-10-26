import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)




    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand className='text-danger fw-bold fs-2' href='/'>
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
                        <NavLink to={'/courses'} className="d-flex align-items-center p-2 fs-4 fw-bold text-dark " style={{ textDecoration: 'none' }}>COURSES</NavLink>
                        <NavLink to={'/blog'} className="d-flex align-items-center p-2 fs-4 fw-bold text-dark" style={{ textDecoration: 'none' }}>BLOG</NavLink>
                        <NavLink to={'/faq'} className="d-flex align-items-center p-2 fs-4 fw-bold text-dark" style={{ textDecoration: 'none' }}>FAQ</NavLink>
                        <NavLink className="d-flex align-items-center px-2 fs-4 fw-bold text-dark" style={{ textDecoration: 'none' }}>Theme</NavLink>
                        <NavLink className="d-flex align-items-center px-2 text-light" style={{ textDecoration: 'none' }}>

                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName ? user.displayName : user.email}</span>
                                        <Link variant="light" onClick={handleLogOut} className="d-flex align-items-center px-2 text-light" style={{ textDecoration: 'none' }}>Log out</Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className="d-flex align-items-center px-2 " style={{ textDecoration: 'none' }}>Login</Link>
                                        <Link to='/register' className="d-flex align-items-center px-2" style={{ textDecoration: 'none' }}>Register</Link>
                                    </>
                            }

                        </NavLink>

                        <NavLink title={user?.displayName} className="d-flex align-items-center px-2" style={{ textDecoration: 'none' }}>
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }

                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;