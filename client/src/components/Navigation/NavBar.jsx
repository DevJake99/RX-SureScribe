import './navbar.css'

import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

function NavBar() {
 return (
   <Navbar bg="light" expand="lg">
     <Navbar.Brand href="#home">Doctor's App</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Button variant="outline-success" onClick={handleSignIn}>Sign In</Button>
     </Navbar.Collapse>
   </Navbar>
 );
}


export default NavBar;