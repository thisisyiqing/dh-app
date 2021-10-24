import React from 'react';
import './App.css';
import DisplayResult from './components/DisplayResult';
import ImgUpload from './components/ImgUpload';

function App() {
  return (
    <div>
      <ImgUpload />
      <DisplayResult />
    </div>
  );
}

export default App;