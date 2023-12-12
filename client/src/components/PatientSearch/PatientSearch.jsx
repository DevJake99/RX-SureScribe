import React from 'react';
import { Form, Button } from 'react-bootstrap';

function PatientSearch({ onSearch }) {
  return (
    <Form onSubmit={onSearch}>
      <Form.Group controlId="patientName">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter patient's name" />
      </Form.Group>

      <Form.Group controlId="patientDOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default PatientSearch;