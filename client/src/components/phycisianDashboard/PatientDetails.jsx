import { Button } from "react-bootstrap";
import PrescribeRx from "./prescribeRx";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function PatientDetails({currentPatient, showPrescriptionModal, setShowPrescriptionModal}){
    return(
        <div>
            <h1>Patient Details</h1>
            <p>{currentPatient.firstName}</p>
            <Button variant="outline-primary" onClick={()=>setShowPrescriptionModal(true)} >Prescribe a Medication</Button>
            <Modal show={showPrescriptionModal} onHide={()=>setShowPrescriptionModal}>
          <PrescribeRx closeModal={()=>showPrescriptionModal} clifford={"The Big Red Dog"} tacos={[1,2,3]}/>
      </Modal>
        </div>
    )
}

export default PatientDetails;