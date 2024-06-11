import React, { useState } from 'react';
import axios from 'axios';

function UploadNhFile() {
  const [file, setFile] = useState(null);
  const [month, setMonth] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('month', month);

    try {
      await axios.post('http://localhost:8080/nh', formData);
      alert('업로드 성공 ㅋ');
    } catch (error) {
      console.error('Error uploading file', error);
      alert('업로드 실패 - -');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Nh Excel File</h2>
      <input type="file" onChange={handleFileChange} required />
      <input type="text" value={month} onChange={handleMonthChange} placeholder="Month" required />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadNhFile;
