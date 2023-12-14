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
          {/* <li className="mx-1" style={{ listStyleType: 'none' }}>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li> */}
          <li className="mx-1" style={{ listStyleType: 'none' }}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="me-auto">
          {/* <li className="mx-1">
            <Link to="/register">
              Register
            </Link>
          </li> */}
          <li className="mx-1" style={{ listStyleType: 'none' }}>
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
          <div><img src="./src/assets/transparentLogo.png" 
          alt="RX-SureScript"
          style={{ width: 'auto', height: '100px' }}/></div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
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

