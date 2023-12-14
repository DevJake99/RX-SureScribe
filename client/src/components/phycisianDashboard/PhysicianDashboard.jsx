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
    firstName: "John",
    lastName: "Doe",
    email: "JohnD@gmail.com",
    phone: "123-456-7891",
    address: "123 Hwy 45",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    dob: "12/10/2000",
    insurance: "Kaiser",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "JaneD@gmail.com",
      phone: "123-789-4560",
      address: "456 Yahoo Lane",
      city: "Vintage",
      state: "MN",
      zip: "55401",
      dob: "1/15/1920",
      insurance: "United Health",
  },
  {
    firstName: "Kelly",
    lastName: "Smith",
    email: "KSmith@gmail.com",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dob: "",
    insurance: "",
},


]

const handlePatientClick = (patient) => {
  setCurrentPatient(patient);
  setShowPatientDetails(true);
};

return (
  <div className="container">
  <div className="flex-container">
    {/* Left Column: Patient Cards */}
    <div className="left-column">
      <h1>Welcome, Physician!</h1>
      <Button className="create-patient-button" variant="outline-primary" onClick={() => setShowModal(true)}>Create New Patient</Button>

      {/* <div className="physicianProfile">
            <h1>{name}</h1>
            <p>License: {license}</p>
            <p>DEA#: {deaNumber}</p>
        </div>
         */}

<div className="patientCardContainer">
            {dummyData.map((patient, index) => (
          <PatientCard currentPatient = {currentPatient} setCurrentPatient = {setCurrentPatient} showPatientDetails= {showPatientDetails} setShowPatientDetails = {setShowPatientDetails} patient={patient} key={index} handlePatientClick={() => handlePatientClick(patient)}/>
        ))}
        
        </div>
          {/* <Button variant="outline-primary">Search for Patient</Button> */}
        </div>

        {/* Right Column: Patient Details */}
        <div className="right-column">
          {showPatientDetails && (
            <PatientDetails
              currentPatient={currentPatient}
              showPrescriptionModal={showPrescriptionModal}
              setShowPrescriptionModal={setShowPrescriptionModal}
            />
          )}
        </div>
      </div>

      {/* Modals and other components can be rendered here */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <CreatePatient closeModal={() => setShowModal(false)} clifford={"The Big Red Dog"} tacos={[1, 2, 3]} />
      </Modal>
    </div>
  );
}




export default PhysDash