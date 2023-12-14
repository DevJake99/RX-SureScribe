import './patientCard.css'
import { Card } from 'react-bootstrap';

function PatientCard({ patient }) {
 return (
   <Card style={{ width: '18rem' }}>
     <Card.Body>
       <Card.Title>{patient.name}</Card.Title>
       <Card.Subtitle className="mb-2 text-muted">{patient.dateOfBirth}</Card.Subtitle>
       <Card.Text>
         Address: {patient.address}
         <br />
         Allergies: {patient.allergies}
       </Card.Text>
     </Card.Body>
   </Card>
 );
}

export default PatientCard;