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
        <h1>엑셀 비교하기</h1>
        <nav>
          <ul>
            <li><Link to="/upload-crop">위임내역 업로드</Link></li>
            <li><Link to="/upload-nh">농손 업로드</Link></li>
            <li><Link to="/display-results">결과 조회</Link></li>
            <li><Link to="/display-nh-data">데이터 비교하기</Link></li>
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
