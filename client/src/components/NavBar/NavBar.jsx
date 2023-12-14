import './NavBar.css'
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Auth from '../../utils/auth';
// import AuthService from '../../utils/auth'
import { Link } from 'react-router-dom';
function NavBar() {

  // const { data } = AuthService.getProfile()
  // const type = data.userType
  // console.log(type)
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="mx-1">
            <Link href="/register" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/register">
              Register
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }



  return (
    <>
      <Navbar className="navbar-custom" collapseOnSelect expand="lg">
        <Container fluid className='px-4'>
          <Navbar.Brand >RX-SureScribe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="me-auto">
              {showNavigation()}
              {/* {type === 'Physician' ? (
                <Nav.Link href="/physician">Physician Dashboard</Nav.Link>
              ) : <Nav.Link href="/pharmacist">Pharmacist Dashboard</Nav.Link>} */}
            </Nav>
            {/* if logged in render the logout button */}
            {/* {<Nav.Link href="/login" onClick={() => { Auth.logout() }}>{Auth.loggedIn() ? 'Logout' : 'Login'}</Nav.Link>} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}

export default NavBar;
