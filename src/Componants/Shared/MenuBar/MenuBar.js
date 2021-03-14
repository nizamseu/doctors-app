import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const MenuBar = () => {
    return (
        <Navbar expand="lg">
        <Navbar.Brand href="#home"><h3>দাঁত</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           
            <Nav.Link className="mr-5"  href="/">Home</Nav.Link>
            <Nav.Link className="mr-5"  href="#about">About</Nav.Link>
            <Nav.Link className="mr-5 "  href="#dental-service">Dental Service</Nav.Link>
            <Nav.Link className="mr-5 text-primary"  href="#review">Review</Nav.Link>
            {/* <Nav.Link className="mr-5 text-muted"  href="#blog">Blog</Nav.Link> */}
            <Nav.Link className="mr-3 text-primary"  href="#contract-us">Contract Us</Nav.Link>
            <Nav.Link className="mr-5 text-primary"   href="dashboard/dash">Dashboard</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
};

export default MenuBar;