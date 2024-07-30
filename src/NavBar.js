import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#" className='ms-3'>FaceDetector</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default MyNavbar;