import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import UploadCropPage from './pages/UploadCropPage';
import UploadNhPage from './pages/UploadNhPage';
import DisplayResultsPage from './pages/DisplayResultsPage';
import DisplayNhDataPage from './pages/DisplayNhDataPage';
import './App.css'; // Import the CSS file

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
          <Route path="/" element={<Home />} />
          <Route path="/upload-crop" element={<UploadCropPage />} />
          <Route path="/upload-nh" element={<UploadNhPage />} />
          <Route path="/display-results" element={<DisplayResultsPage />} />
          <Route path="/display-nh-data" element={<DisplayNhDataPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
