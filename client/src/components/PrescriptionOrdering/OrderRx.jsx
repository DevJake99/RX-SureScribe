import React from 'react';
import { Button, Form } from 'react-bootstrap';

function MedOrder({ patient }) {
 return (
   <div>
     <h2>Medication Chart</h2>
     {/* Display patient's medication chart here */}
     <h2>Prescribe New Medication</h2>
     <Form>
       <Form.Group controlId="formDrugName">
         <Form.Label>Drug Name</Form.Label>
         <Form.Control type="text" placeholder="Enter drug name" />
       </Form.Group>
       {/* Other form fields here */}
       <Button variant="secondary" onClick={handleModalClose}>Close</Button>
       <Button variant="primary" type="submit">
         Submit
       </Button>
     </Form>
   </div>
 );
}

export default MedOrder;