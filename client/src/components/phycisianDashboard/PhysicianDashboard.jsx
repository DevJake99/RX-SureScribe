import './phycisianDash.css'
import { Button, Modal } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import CreatePatient from './createPatient';
import { useState } from 'react';
import PatientCard from './patientCard';
import PatientDetails from './patientDetails';

function PhysDash() {
  const [showModal, setShowModal] = useState(false);
  const[showPatientDetails, setShowPatientDetails] = useState(false);
  const[currentPatient, setCurrentPatient] = useState({})
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  // const [name, license, deaNumber] = useState({}) 

  let dummyData = [
    {
    firstName: "y",
    lastName: "z",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    insurance: "",
    },
    {
      firstName: "a",
      lastName: "b",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      dob: "",
      insurance: "",
  },
  {
    firstName: "c",
    lastName: "d",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    insurance: "",
},


]

  return (
    <div>
      <h1>Welcome, Physician!</h1>
      <Button className="create-patient-button" variant="outline-primary" onClick={() => setShowModal(true)}>Create New Patient</Button>
      <Modal show={showModal} onHide={()=>setShowModal(false)}>
          <CreatePatient closeModal={()=>setShowModal(false)} clifford={"The Big Red Dog"} tacos={[1,2,3]}/>
      </Modal>
      
      {/* <div className="physicianProfile">
            <h1>{name}</h1>
            <p>License: {license}</p>
            <p>DEA#: {deaNumber}</p>
        </div>
         */}
      <div className="patientCardContainer">
        {dummyData.map((patient, index) => (
          <PatientCard currentPatient = {currentPatient} setCurrentPatient = {setCurrentPatient} showPatientDetails= {showPatientDetails} setShowPatientDetails = {setShowPatientDetails} patient={patient} key={index} handlePatientClick={() => console.log("clicked")}/>
        ))}
        
        </div>
        { showPatientDetails ?
         <PatientDetails showPrescriptionModal = {showPrescriptionModal} setShowPrescriptionModal = {setShowPrescriptionModal} currentPatient = {currentPatient}/> :
          null
        } 
    
        
      <Button variant="outline-primary" /*onClick={handleSearchPatient}*/>Search for Patient</Button>
    </div>

  );
}





export default PhysDash