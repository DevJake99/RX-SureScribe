import React from 'react';
import { Form, Button } from 'react-bootstrap';

function SignUpForm({ onSignUp }) {
  return (
    <Form onSubmit={onSignUp}>
      <Form.Group controlId="userType">
        <Form.Label>User Type</Form.Label>
        <Form.Control as="select">
          <option>Physician</option>
          <option>Pharmacist</option>
        </Form.Control>
      </Form.Group>

      {/* Add other form fields here */}

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUpForm;