import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Menebar.css';

const Menubar = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className="bg-nav" expand="lg">
                <Container>
                    <Navbar.Brand id="nav-brand" as={Link} to="/home">ABS Tourist Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link id="nav-item" as={Link} to="/home">Home</Nav.Link>

                            {user.displayName ?
                                <>
                                    <Nav.Link id="nav-item" as={Link} to="/mytour">My Tour</Nav.Link>
                                    <Nav.Link id="nav-item" as={Link} to="/tourlist">Tour List</Nav.Link>
                                    <Nav.Link id="nav-item" as={Link} to="/addtour">Add Tour</Nav.Link>
                                    <li className="log-out">
                                        <button onClick={logOut}>Log Out</button>
                                    </li>
                                    <li className="user-photo">
                                        <img src={user.photoURL} alt="" />
                                    </li>
                                </>
                                :
                                <Nav.Link id="nav-item" as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;