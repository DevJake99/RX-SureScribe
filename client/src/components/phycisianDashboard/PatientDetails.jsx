import { Button, Modal } from "react-bootstrap";
import PrescribeRx from "./prescribeRx";
import { useState, useMutation } from "react";

function PatientDetails({currentPatient, showPrescriptionModal, setShowPrescriptionModal}){
    return (
        <div className="right-component text-center">
            <h1>Patient Details</h1><br/>
            <p style={{ fontSize: '20px', fontWeight: 'bold'}}>{currentPatient.firstName} {currentPatient.lastName}</p>
            <p style={{ fontSize: '14px'}}>{currentPatient.dob}<br/>
            {currentPatient.phone}<br/>
            {currentPatient.address}<br/>
            {currentPatient.city}<br/>
            {currentPatient.state}<br/>
            {currentPatient.zip}<br/>
            {currentPatient.insurance}</p>
            <PrescribeRx variant="outline-primary" 
        showPrescriptionModal={showPrescriptionModal}
        setShowPrescriptionModal={setShowPrescriptionModal}
      />
        </div>
    )
}

export default PatientDetails;