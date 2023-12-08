import { useState, useEffect } from 'react';
import './pharmacistDash.css';
import SearchIcon from '/Users/pavang/Desktop/RX-SureScribe/client/src/assets/search.svg';


function PharmDash() {
    const [searchName, setSearchName] = useState('');
  
    useEffect(() => {searchPatient(searchName)}, [searchName]);
  
    const searchPatient = async (patientName) => {
      try {
        const response = await fetch(`${patientName}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };
  
    return (
      <>
        <h1>PharmDash</h1>
        <div className="search">
          <input
            placeholder="Search for patients"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          {"\t"}{"\t"}{"\t"}<img src={SearchIcon} alt="Search" onClick={() => searchPatient(searchName)} />
        </div>
      </>
    );
  }
export default PharmDash;
