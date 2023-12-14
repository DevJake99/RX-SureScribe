import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Register from '../Register/Register';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
// import { Navbar } from 'react-bootstrap';
// import Footer from '../../components/Footer/Footer';
const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);


  //update state based on form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  //submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...user },
      });


      Auth.login(data.login.token);

    } catch (error) {
      // console.error('GraphQL Error:', error.message);
      // Optionally, log the detailed error information
      // console.error(error);
      //window.location.href = '/physician';

      // Handle specific error cases if needed
      if (error.message.includes('specific error message')) {
        // Handle this specific error
      }

      // Handle the error or show a user-friendly message
    }

    // clear form values
    setUser({
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* <Navbar className="navbar-custom" collapseOnSelect expand="lg">
        <Container fluid className='px-4'>
          <Navbar.Brand >RX-SureScribe</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      {/* <Container> */}
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col md={6}>
          <div className='card'>
            <div className='card-body'>
              {data ? (
                <p>
                  Noice you logged in successfully
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <input
                      className='form-control'
                      value={user.email}
                      name="email"
                      type="email"
                      placeholder='example@example.com'
                      onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <input
                      className='form-control'
                      value={user.password}
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={handleInputChange} />
                  </Form.Group>
                  <Button className='btn btn-secondary m-1 col-2' type="submit">Login</Button>
                </Form>
              )}

              {error && (
                <div className='my-3 p-3 bg-danger text-white'>
                  {error.message}
                </div>
              )}
              < Register />

            </div>
          </div>

        </Col>
      </Row>
      {/* <Footer /> */}
      {/* </Container> */}

    </>
  )
}

export default Login
