import React from "react";
import "./App.css";
import DisplayResult from "./components/DisplayResult";
import ImgUpload from "./components/ImgUpload";
import DropZone from "./dropzone/DropZone";

function App() {
  return (
    <div className="right-body">
      <ImgUpload />
      <DisplayResult />
      <p className="title">Upload File</p>
      <div className="content">
        <DropZone />
      </div>
    </div>
  );
}

export default App;
