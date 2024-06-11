import React from 'react';
import UploadCropFile from './components/UploadCropFile';
import UploadNhFile from './components/UploadNhFile';
import DisplayResults from './components/DisplayResults';
import DisplayNhData from './components/DisplayNhData';

function App() {
  return (
    <div className="App">
      <h1>Excel Upload and Matching App</h1>
      <UploadCropFile />
      <UploadNhFile />
      <DisplayResults />
      <DisplayNhData />
    </div>
  );
}

export default App;
