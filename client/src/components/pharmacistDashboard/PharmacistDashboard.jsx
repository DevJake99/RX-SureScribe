import './pharmacistDash.css';
import { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PatientCard from '../patientProfile/PatientCard';
import MedicationCard from '../MedicationCard/MedicationCard';
import OrderContext from '../phycisianDashboard/OrderContext';

const PharmDash = () => {
    const { orders } = useContext(OrderContext);

  
    return (
      <div>
      <div className="flex-container">
        <h1>Hello {name}</h1>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/patients">Patient List</Link>
            </li>
            <li>
              <Link to="/medications">Medication History</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
  </div>
        <hr />
        <Routes>
        <Route path="/patients" element={PatientCard} />
        <Route path="/medications" element={MedicationCard} />
        </Routes>
        </div>

        {/* Orders Section */}
        <div className="order-container">
          <h1>Orders</h1>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>{order.medication}</li>
            ))}
          </ul>
        <br/>
        <br/>
        <br/>
        <a href="#" className="contact-btn">Contact Physician</a>
        <br/>
      </div>
      </div>
    );
  };

export default PharmDash;
