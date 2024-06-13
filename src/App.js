import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UploadCropFile from './components/UploadCropFile';
import UploadNhFile from './components/UploadNhFile';
import DisplayResults from './components/DisplayResults';
import DisplayNhData from './components/DisplayNhData';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Excel Upload and Matching App</h1>
        <nav>
          <ul>
            <li><Link to="/upload-crop">Upload Crop File</Link></li>
            <li><Link to="/upload-nh">Upload Nh File</Link></li>
            <li><Link to="/display-results">Display Results</Link></li>
            <li><Link to="/display-nh-data">Display Nh Data</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/upload-crop" element={<UploadCropFile />} />
          <Route path="/upload-nh" element={<UploadNhFile />} />
          <Route path="/display-results" element={<DisplayResults />} />
          <Route path="/display-nh-data" element={<DisplayNhData />} />
          <Route path="/" element={<h2>Welcome to the Excel Upload and Matching App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
