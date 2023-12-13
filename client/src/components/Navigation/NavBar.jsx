import './navbar.css'
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Auth from '../../utils/auth';
import AuthService from '../../utils/auth'

function NavBar() {

  const { data } = AuthService.getProfile()
  const type = data.userType
  console.log(type)




  return (
    <>
      <Navbar className="navbar-custom" collapseOnSelect expand="lg">
        <Container fluid className='px-4'>
          <Navbar.Brand >RX-SureScribe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="me-auto">
              {type === 'Physician' ? (
                <Nav.Link href="/physician">Physician Dashboard</Nav.Link>
              ) : <Nav.Link href="/pharmacist">Pharmacist Dashboard</Nav.Link>}
            </Nav>
            <Nav.Link href="/login" onClick={() => { Auth.logout() }}>{Auth.loggedIn() ? 'Logout' : 'Login'}</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}

export default NavBar;
