import {Card,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';


const PatientCard = ({  setCurrentPatient, patient, handlePatientClick, showPatientDetails, setShowPatientDetails }) => {


   useEffect(() => {
    console.log(showPatientDetails);
}, [showPatientDetails]);

    return (
        <Card style={{width:'18rem', background: 'var(--bs-info)', marginBottom: '16px'}} onClick={() => handlePatientClick(patient._id)}>
            <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{patient.firstName} {patient.lastName}</Card.Title>
                <Card.Text>
                    {patient.dob}
                </Card.Text>
                <Button variant="outline-light" onClick = {() => {
                    setShowPatientDetails(true)
                    setCurrentPatient(patient)
                }} className="mt-auto"  disabled={showPatientDetails}>View Patient</Button>
            </Card.Body>
        </Card>
    )
}

export default PatientCard;