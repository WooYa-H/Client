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
      <h2>매칭하기</h2>
      <input type="text" value={month} onChange={handleMonthChange} placeholder="Month" />
      <button onClick={fetchResults}>Fetch Results</button>
      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>securities Number</th>
              <th>Target Number</th>
              <th>Accident Number</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.name}</td>
                <td>{result.securitiesNumber}</td>
                <td>{result.targetNumber}</td>
                <td>{result.accidentNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayResults;
