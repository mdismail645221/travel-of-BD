import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

import './Header.css'



const Header = () => {

    const {user, lotOut} = useContext(AuthContext)

    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Link to='/'><Navbar.Brand>Navbar scroll</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav
                    className="ms-auto my-2"
                    navbarScroll
                >
                    <NavLink className={`text-decoration-none me-3 text-black fw-semibold fs-5 ${(isActive)=> isActive ? 'activeStyle' : undefined}`} to='/'>News</NavLink>
                    <NavLink className={'text-decoration-none me-3 text-black fw-semibold fs-5'} to='/'>Destination</NavLink>
                    <NavLink className={'text-decoration-none me-3 text-black fw-semibold fs-5'} to='/'>Blog</NavLink>
                    <NavLink className={'text-decoration-none me-3 text-black fw-semibold fs-5'} to='/'>Contact</NavLink>
                    {
                        user ?
                                <>
                                    <div><NavLink className={'text-decoration-none me-3 text-black fw-semibold fs-5'} to='/'>{(user.email).slice(0,15)}...</NavLink></div>
                                     <Button onClick={lotOut}><Link to='/login' className='text-white text-decoration-none'>Log Out</Link></Button>
                                </>
                                : 
                                <>
                                    <Button className='me-3'><Link to='/login' className=' text-white text-decoration-none'>Login</Link></Button>
                                    <Button className='me-3'><Link to='/register' className=' text-white text-decoration-none'>Register</Link></Button>
                                </>
                    }
                </Nav>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;