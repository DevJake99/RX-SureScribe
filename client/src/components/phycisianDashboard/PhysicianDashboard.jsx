import './phycisianDash.css'
import { Button, Modal, Form } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
//import CreatePatient from './createPatient';
import { useEffect, useState } from 'react';
import PatientCard from './patientCard';
import PatientDetails from './PatientDetails.jsx';
import { useMutation } from '@apollo/client';
import { ADD_PATIENT } from '../../utils/mutations';

function PhysDash() {
  const [patientInfo, setPatientInfo] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });
  const [addPatient, { error, data }] = useMutation(ADD_PATIENT);


  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setPatientInfo({
      firstName: "",
      lastName: "",
      dob: "",
    });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPatientInfo({
      ...patientInfo,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(patientInfo)
  })
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log('patientInfo:', patientInfo)
    let data;
    try {
      ({ data } = await addPatient({
        variables: { ...patientInfo },
      }));
      console.log(data);
    } catch (e) {
      console.error(e);
      console.log(data); // data will still be undefined if an error occurred when calling addPatient
    }
  };

  const [showPatientDetails, setShowPatientDetails] = useState(false);
  const [currentPatient, setCurrentPatient] = useState({})
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
      phone: "999-999-9999",
      address: "999",
      city: "Lucky Lane",
      state: "RI",
      zip: "02801",
      dob: "4/27/1999",
      insurance: "Medica",
    },
  ]

  const handlePatientClick = (patient) => {
    setCurrentPatient(patient);
    setShowPatientDetails(true);
  };


  return (
    <div>
      <div className="flex-container">
        {/* Left Column: Patient Cards */}
        <div className="left-column">
          <h1>Welcome, Physician!</h1>
          <Button className="create-patient-button" variant="outline-primary" onClick={() => setShowModal(true)}>Create New Patient</Button>


          <div className="patientCardContainer">
            {dummyData.map((patient, index) => (
              <PatientCard currentPatient={currentPatient} setCurrentPatient={setCurrentPatient} showPatientDetails={showPatientDetails} setShowPatientDetails={setShowPatientDetails} patient={patient} key={index} handlePatientClick={() => handlePatientClick(patient)} />
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
      <Modal show={showModal} onClick={handleModalOpen} onHide={handleModalClose} className="m-0">
        <Modal.Header closeButton>
          <Modal.Title>Create a Patient</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {data ? (
            <p>Patient added!</p>
          ) : (
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={patientInfo.firstName}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={patientInfo.lastName}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>DOB:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Date of Birth"
                  name="dob"
                  value={patientInfo.dob}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          )}
          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>Close</Button>
          <Button type="submit " variant="primary" onClick={handleFormSubmit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}




export default PhysDash