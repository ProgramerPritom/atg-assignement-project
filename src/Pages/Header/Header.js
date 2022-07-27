import React from 'react';
import { NavDropdown, Form ,InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import { FaSearch } from "react-icons/fa";

const Header = () => {

    const text= "<FaSearch></FaSearch>";
    return (
        <div>
            <Navbar className='navbar-main' collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand as={Link} to='/'><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">

            {/* <Form.Group className="mb-0" controlId="formBasicPassword">
            <Form.Control type="text" placeholder={`${text}Hello<FaSearch></FaSearch>`}/>
            </Form.Group> */}
            <InputGroup id="searchId" className="mb-0">
            <InputGroup.Text id="basic-addon1"><FaSearch></FaSearch></InputGroup.Text>
            <Form.Control
            placeholder="Search for your favorite groups in ATG"
            id='input-text-place'
            />
            </InputGroup>
            
            
            </Nav>
            <Nav>
            <NavDropdown title={<p className='navbar-account-text'>Create account.<span>It's Free</span></p>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><FaSearch></FaSearch></NavDropdown.Item>
              
              
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
};

export default Header;