import { Button, Modal } from "react-bootstrap";
import PrescribeRx from "./prescribeRx";
import { useState } from "react";

function PatientDetails({currentPatient, showPrescriptionModal, setShowPrescriptionModal}){
    return (
        <div className="right-component text-center">
            <h1>Patient Details</h1>
            <p style={{ fontSize: '20px', fontWeight: 'bold'}}>{currentPatient.firstName} {currentPatient.lastName}</p>
            <PrescribeRx variant="outline-primary" 
        showPrescriptionModal={showPrescriptionModal}
        setShowPrescriptionModal={setShowPrescriptionModal}
      />
        </div>
    )
}

export default PatientDetails;