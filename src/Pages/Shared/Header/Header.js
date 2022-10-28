import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser, FaUmbrella } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import { ImBrightnessContrast } from "react-icons/im";
import './darkMode.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand className='text-dark fw-bold fs-1 mb-3' href='/'>
                        <FaUmbrella></FaUmbrella>
                    </Navbar.Brand>
                    <Navbar.Brand className='text-info fw-bold fs-1 mb-2' href='/'>
                        Developer Program
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="me-auto">
                            <NavLink to={'/'} className="d-flex align-items-center p-2 fs-4 fw-bold text-info 
                            {({ isActive }) => (isActive ? 'active' : 'inactive')}
                            
                            " style={{ textDecoration: 'none' }}>Home</NavLink>
                            <NavLink to={'/courses'} className="d-flex align-items-center p-2 fs-4 fw-bold text-info " style={{ textDecoration: 'none' }}>Courses</NavLink>
                            <NavLink to={'/blog'} className="d-flex align-items-center p-2 fs-4 fw-bold text-info" style={{ textDecoration: 'none' }}>Blog</NavLink>
                            <NavLink to={'/faq'} className="d-flex align-items-center p-2 fs-4 fw-bold text-info" style={{ textDecoration: 'none' }}>Faq</NavLink>


                            <NavLink onClick={toggleTheme}
                                className="d-flex align-items-center px-4 fs-1 fw-bold text-info"
                                style={{ textDecoration: 'none' }}><ImBrightnessContrast className={`App ${theme}`}></ImBrightnessContrast>
                            </NavLink>
                            <NavLink className="d-flex align-items-center px-2 text-light" style={{ textDecoration: 'none' }}>

                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName ? user.displayName : user.email}</span>
                                            <Link variant="light" onClick={handleLogOut} className="d-flex align-items-center px-2 text-light" style={{ textDecoration: 'none' }}>Logout</Link>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className="d-flex align-items-center px-2 text-light" style={{ textDecoration: 'none' }}>Login</Link>
                                            <Link to='/register' className="d-flex align-items-center px-2 text-light" style={{ textDecoration: 'none' }}>Register</Link>
                                        </>
                                }

                            </NavLink>

                            <NavLink title={user?.displayName} className="d-flex align-items-center px-2 text-light" style={{ textDecoration: 'none' }}>
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
        </div>
    );
};

export default Header;