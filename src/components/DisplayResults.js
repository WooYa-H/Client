import React, { useState } from 'react';
import axios from 'axios';

function DisplayResults() {
  const [month, setMonth] = useState('');
  const [results, setResults] = useState([]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const fetchResults = async () => {
    try {
      const response = await axios.post('http://localhost:8080/result', { month });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching results', error);
    }
  };

  return (
    <div>
      <h2>Display Non-matching Nh Data</h2>
      <input type="text" value={month} onChange={handleMonthChange} placeholder="Month" />
      <button onClick={fetchResults}>Fetch Results</button>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayResults;
