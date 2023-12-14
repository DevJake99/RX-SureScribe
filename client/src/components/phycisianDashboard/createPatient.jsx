import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";



export default function CreatePatient(props) {
    const [patientInfo, setPatientInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        dob: "",
        insurance: "",
    });

    useEffect(() => {
        console.log(patientInfo)
    })

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
            const { data } = await createPatient({
                variables: {
                    firstName: patientInfo.firstName,
                    lastName: patientInfo.lastName,
                    email: patientInfo.email,
                    phone: patientInfo.phone,
                    address: patientInfo.address,
                    city: patientInfo.city,
                    state: patientInfo.state,
                    zip: patientInfo.zip,
                    dob: patientInfo.dob,
                    insurance: patientInfo.insurance,

                },
            });
        } catch (e) {
            console.error(e);
        }
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        props.closeModal("abby the good girl");
        setPatientInfo({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            dob: "",
            insurance: "",
        });
        console.log(props.tacos)
    };


    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog className="m-0">
                <Modal.Header closeButton>
                    <Modal.Title>Create a Patient</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                        </Form>
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
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={patientInfo.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Phone Number"
                                name="phone"
                                value={patientInfo.phone}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                                name="address"
                                value={patientInfo.address}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter City"
                                name="city"
                                value={patientInfo.city}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>State:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter State"
                                name="state"
                                value={patientInfo.state}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Zipcode:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Zipcode"
                                name="zip"
                                value={patientInfo.zip}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};
