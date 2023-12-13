import {Card,Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';


const PatientCard = ({  setCurrentPatient, patient, handlePatientClick, showPatientDetails, setShowPatientDetails }) => {

  


   useEffect(() => {
    console.log(showPatientDetails)
   })

    return (
        <Card style={{width:'18rem', background:'blue'}} onClick={() => handlePatientClick(patient._id)}>
            <Card.Body>
                <Card.Title>{patient.firstName} {patient.lastName}</Card.Title>
                <Card.Text>
                    {patient.email}
                </Card.Text>
                <Button variant= "primary" onClick = {() => {
                    setShowPatientDetails(true)
                    setCurrentPatient(patient)
                }}>View Patient</Button>
            </Card.Body>
        </Card>
    )
}

export default PatientCard;