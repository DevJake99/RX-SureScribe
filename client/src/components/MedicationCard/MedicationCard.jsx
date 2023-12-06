import React from 'react';
import { Card } from 'react-bootstrap';

function MedicationCard({ patient }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{patient.name}'s Medications</Card.Title>
        {patient.medications.map((medication, index) => (
          <Card.Text key={index}>
            Name: {medication.name}
            <br />
            Dosage: {medication.dosage}
            <br />
            Frequency: {medication.frequency}
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
}

export default MedicationCard;