import './phycisianDash.css'
import { Button } from 'react-bootstrap';

function PhysDash() {
  return (
    <div>
      <h1>Welcome, Doctor!</h1>
      <Button variant="outline-primary" onClick={handleCreatePatient}>Create New Patient</Button>
      <Button variant="outline-primary" onClick={handleSearchPatient}>Search for Patient</Button>
    </div>
  );
}

export default PhysDash