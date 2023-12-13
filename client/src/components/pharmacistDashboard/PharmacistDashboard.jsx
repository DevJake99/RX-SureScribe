import { useState, useEffect, useContext } from 'react';
import './pharmacistDash.css';
import OrderContext from '../phycisianDashboard/OrderContext';

function PharmDash() {
    const { orders } = useContext(OrderContext);

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>{order.medication}</li>
                ))}
            </ul>
        </div>
    );
}

export default PharmDash;
