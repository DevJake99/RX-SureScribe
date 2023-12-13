import './navbar.css'
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function NavBar() {
  // Assuming you have the user type available in your application state
  //const [userType, setUserType] = useState('Physician');

  const { loading, data } = useQuery(QUERY_ME)
  if (loading) {
    return <div>Loading...</div>;
  }
  const user = data?.user?.userType;



  return (
    <Navbar className="navbar-custom" collapseOnSelect expand="lg">
      <Container fluid className='px-4'>
        <Navbar.Brand href="/">RX-SureScribe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="me-auto">

            {/*!user && (
              <Nav.Link href="/physician">Physician Dashboard</Nav.Link>
            )*/}
            {user === 'Physician' && (
              <Nav.Link href="/physician">Physician Dashboard</Nav.Link>
            )}
            {user === 'Pharmacy' && (
              <Nav.Link href="/pharmacist">Pharmacist Dashboard</Nav.Link>
            )}
          </Nav>
          <Nav.Link href="/login" onClick={() => { Auth.logout() }}>{Auth.loggedIn() ? 'Logout' : 'Login'}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar;
