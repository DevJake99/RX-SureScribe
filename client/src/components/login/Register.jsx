import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './register.css';



const Register = () => {
  const [user, setUser] = useState({
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    streetAdress: '',
    city: '',
    state: '',
    zip: '',
  });

  /*const [selectedOption, setSelectedOption] = useState('');
  const userTypeOptions = [
    { value: user.userType, label: 'Physician' },
    { value: user.userType, label: 'Pharmacist' },
    // Add more options as needed
  ]; */

  const [showModal, setShowModal] = useState(false);

  const [createAccount, { error, data }] = useMutation(CREATE_USER);


  const handleInputChange = (e) => {
    // each name='' propert for form input must match property in User document
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const { data } = await createAccount({
        variables: { ...user },
      });

      Auth.login(data.createAccount.token);
    } catch (e) {
      console.error(e);
    }

  };


  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUser({
      userType: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      streetAdress: '',
      city: '',
      state: '',
      zip: '',
    });
  };


  return (
    <>
      <a onClick={handleModalOpen}>
      Register Here
    </a>
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data ? (
            <p>Congratulations! You have created an account!</p>
          ) : (
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId='formUserType'>
                <Form.Label>User Type</Form.Label>
                <select
                  required
                  className='form-control'
                  name='userType'
                  value={user.userType}
                  onChange={handleInputChange}>
                  <option onChange={handleInputChange} name='userType ' >Select User Type</option>
                  <option onChange={handleInputChange} name='userType ' value={'Physician'}>Physician</option>
                  <option onChange={handleInputChange} name='userType' value={'Pharmacy'}>Pharmacy</option>
                </select>
              </Form.Group>
              <br />

              <Form.Group controlId='formFirstName'>
                <Form.Label>First Name</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.firstName}
                  name="firstName"
                  type="text"
                  placeholder='First Name'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Form.Group controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.lastName}
                  name="lastName"
                  type="text"
                  placeholder='Last Name'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.email}
                  name="email"
                  type="email"
                  placeholder='Email'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.password}
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Form.Group controlId='formStreetAdress'>
                <Form.Label>Street Address</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.streetAdress}
                  name='streetAdress'
                  type='text'
                  placeholder='Street Address'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Form.Group controlId='formCity'>
                <Form.Label>City</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.city}
                  name='city'
                  type='text'
                  placeholder='City'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Form.Group controlId='formState'>
                <Form.Label>State</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.state}
                  name='state'
                  type='text'
                  placeholder='State'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <Form.Group controlId='formZip'>
                <Form.Label>Zip Code</Form.Label>
                <input
                  required
                  className='form-control'
                  value={user.zip}
                  name='zip'
                  type='text'
                  placeholder='Zip Code'
                  onChange={handleInputChange} />
              </Form.Group>
              <br />
              <input className='btn btn-secondary m-1 col-2' type='button' value="Submit" onClick={handleFormSubmit} />
            </Form>
          )}

          {error && (
            <div className='my-3 p-3 bg-danger text-white'>
              {error.message}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Register
