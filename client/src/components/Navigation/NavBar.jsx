import './navbar.css'
import { Navbar, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/DoctorsHome">Doctor's Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Button variant="outline-success" /*onClick={handleSignIn}*/ >Sign In</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}



export default NavBar;

