import { useState, useEffect, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import OrderContext from "./OrderContext";

export default function PrescribeRx(props) {
    const { setOrders } = useContext(OrderContext);
    const [prescriptionInfo, setPrescriptionInfo] = useState({
        medication: "",
        dosage: "",
        frequency: "",
        duration: "",
        refills: "",
        notes: "",
    });

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log(prescriptionInfo)
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPrescriptionInfo({
            ...prescriptionInfo,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setOrders((prevOrders) => [...prevOrders, prescriptionInfo]);

        // Call the setPrescription function passed as a prop
        props.setPrescription(prescriptionInfo);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
        setPrescriptionInfo({
            medication: "",
            dosage: "",
            frequency: "",
            duration: "",
            refills: "",
            notes: "",
        });
    };

    return (
        <div>
            <Button onClick={handleModalOpen}>Open Prescription Form</Button>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Dialog className="m-0">
                    <Modal.Header closeButton>
                        <Modal.Title>Prescription Entry</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Medication:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Medication"
                                    name="medication"
                                    value={prescriptionInfo.medication}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Dosage:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Medication Dosing"
                                    name="dosage"
                                    value={prescriptionInfo.dosage}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Frequency:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Frequency"
                                    name="frequency"
                                    value={prescriptionInfo.frequency}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Duration:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Duration"
                                    name="duration"
                                    value={prescriptionInfo.duration}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Refills:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Refills"
                                    name="refills"
                                    value={prescriptionInfo.refills}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Notes:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Notes"
                                    name="notes"
                                    value={prescriptionInfo.notes}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                        <Button variant="primary" type="submit">Save Changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    );
};