import React from 'react';
import { Button, Form } from 'react-bootstrap';

function PrescriptionForwarding() {
 return (
   <div>
     <h2>Prescription Forwarding</h2>
     <Form>
       <Form.Group controlId="formLocation">
         <Form.Label>Location</Form.Label>
         <Form.Control type="text" placeholder="Enter location" />
       </Form.Group>
       <Button variant="secondary" onClick={handleModalClose}>Close</Button>
       <Button variant="primary" type="submit">
         Forward Prescription
       </Button>
     </Form>
   </div>
 );
}

export default PrescriptionForwarding;
