import React from 'react';
import './physicianProfile.css';

function PhysicianProfile({ name, license, deaNumber }) {
    return (
        <div className="physicianProfile">
            <h1>{name}</h1>
            <p>License: {license}</p>
            <p>DEA#: {deaNumber}</p>
        </div>
    )
}

export default PhysicianProfile;