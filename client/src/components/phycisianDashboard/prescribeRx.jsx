import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function PrescribeRx(props) {
    const [prescriptionInfo, setPrescriptionInfo] = useState({
        medication: "",
        dosage: "",
        frequency: "",
        duration: "",
        refills: "",
        notes: "",
    });

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

        try {
            const { data } = await createPatient({
                variables: {
                    medication: prescriptionInfo.medication,
                    dosage: prescriptionInfo.dosage,
                    frequency: prescriptionInfo.frequency,
                    duration: prescriptionInfo.duration,
                    refills: prescriptionInfo.refills,
                    notes: prescriptionInfo.notes,
                },
            });
        } catch (e) {
            console.error(e);
        }
    }



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
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial', }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Prescription Entry</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Medication</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Medication"
                                name="Medication"
                                value={prescriptionInfo.medication}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Dosage</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Medication Dosing"
                            name="Dosage"
                            value={prescriptionInfo.dosage}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Frequency"
                            name="Frequency"
                            value={prescriptionInfo.frequency}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Duration"
                            name="Duration"
                            value={prescriptionInfo.duration}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Refills</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Refills"
                            name="Refills"
                            value={prescriptionInfo.refills}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>notes</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Notes"
                            name="Notes"
                            value={prescriptionInfo.notes}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}; 