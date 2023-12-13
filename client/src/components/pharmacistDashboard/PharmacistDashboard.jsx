import './pharmacistDash.css';
import { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PatientCard from '../patientProfile/PatientCard';
import MedicationCard from '../MedicationCard/MedicationCard';
import OrderContext from '../phycisianDashboard/OrderContext';

const PharmDash = () => {
    const { orders } = useContext(OrderContext);

    // useEffect(() => {
    //   // Example: Fetch orders from an API endpoint
    //   // Replace this with your actual API endpoint
    //   fetch('https://api.example.com/orders')
    //     .then((response) => response.json())
    //     .then((data) => setOrders(data))
    //     .catch((error) => console.error('Error fetching orders:', error));
    // }, []);
  
    return (
      <div className="center-container">
        <h1>Hello {name}</h1>
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
  
        <hr />
        <Routes>
        <Route path="/patients" element={PatientCard} />
        <Route path="/medications" element={MedicationCard} />
        </Routes>
        {/* Orders Section */}
        <div className="center-container">
          <h1>Orders</h1>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>{order.medication}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default PharmDash;
