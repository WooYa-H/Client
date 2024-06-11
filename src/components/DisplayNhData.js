import React, { useState } from 'react';
import axios from 'axios';

function DisplayNhData() {
  const [month, setMonth] = useState('');
  const [data, setData] = useState([]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:8080/date', { month });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      <h2>Display Nh Data</h2>
      <input type="text" value={month} onChange={handleMonthChange} placeholder="Month" />
      <button onClick={fetchData}>Fetch Data</button>
      {data.length > 0 && (
        <ul>
          {data.map((nh) => (
            <li key={nh.id}>{nh.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayNhData;
