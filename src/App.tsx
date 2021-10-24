import React from 'react';
import './App.css';
import DisplayResult from './components/DisplayResult';
import ImgUpload from './components/ImgUpload';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: "space-around", backgroundColor: 'rgb(230, 224, 248)', height: "1700px"}}>
      <div style={{display: 'flex', flexDirection: 'column', marginTop: '180px'}}>
        <h1 style={{fontFamily: 'raleway', fontSize: "70px", marginLeft:"40px"}}>Waste</h1>
        <h1 style={{fontFamily: 'raleway', fontSize: "120px", marginLeft:"80px"}}>&nbsp;&nbsp;Advisor</h1>
      </div>
      <DisplayResult />
      <div style={{marginTop: "50px"}}>
        <ImgUpload />
      </div>
    </div>
  );
}

export default App;