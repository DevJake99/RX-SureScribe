import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Auth from 'server/utils/auth.js';
import { useState } from 'react'; 


export default function App() {
  const [isPhysician, /*setIsPhysician*/] = useState(true);

 return (
  <Navbar className="navbar-custom" collapseOnSelect expand="lg">
  <Container fluid className='px-4'>
    <Navbar.Brand href="/">RX-SureScribe</Navbar.Brand> 
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/dashboard">
        {isPhysician ? 'Dashboard' : 'Dashboard'}
          </Nav.Link>
      </Nav>
      <Nav.Link href="/login">Login</Nav.Link>
    </Navbar.Collapse>
  </Container>
  </Navbar>
 );
}