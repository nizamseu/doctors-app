import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const MenuBar = () => {
    return (
        <Navbar expand="lg">
        <Navbar.Brand href="#home">@niZam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link className="mr-5"  href="dashboard/dash">Home</Nav.Link>
            <Nav.Link className="mr-5"  href="#home">Home</Nav.Link>
            <Nav.Link className="mr-5"  href="#about">About</Nav.Link>
            <Nav.Link className="mr-5"  href="#dental-service">Dental Service</Nav.Link>
            <Nav.Link className="mr-5 text-white"  href="#review">Review</Nav.Link>
            <Nav.Link className="mr-5 text-white"  href="#blog">Blog</Nav.Link>
            <Nav.Link className="mr-5 text-white"  href="#contract-us">Contract Us</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
};

export default MenuBar;