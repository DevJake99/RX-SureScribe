import { useState, } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { ADD_PATIENT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";



export default function CreatePatient() {
    const [patientInfo, setPatientInfo] = useState({
        firstName: "",
        lastName: "",
        dob: "",
    });

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

    const [addPatient, { error, data }] = useMutation(ADD_PATIENT);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientInfo({
            ...patientInfo,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addPatient({
                variables: { ...patientInfo },
            });
            console.log(data);
        } catch (e) {
            console.error(e);
            console.log(data);
        }
    };





    return (
        <div>
            <Button onClick={handleModalOpen}>Add a Patient</Button>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Dialog className="m-0">
                    <Modal.Header closeButton>
                    <Modal.Title>Create a Patient</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    {data ? (
                        <p>Patient added!</p>
                    ) : (
                        <Form onSubmit={handleFormSubmit}>
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
                </Modal.Dialog>
            </Modal>
        </div>
    );
}
