import React, { useState } from "react";
import uploadFileToBlob from "../azure-storage-blob";

const ImgUpload = () => {
  const [blobList, setBlobList] = useState<string[]>([]);
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) {
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    const blobsInContainer: string[] = await uploadFileToBlob(file);
    setBlobList(blobsInContainer);
    console.log(blobsInContainer);

    setFile(undefined);
  };

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map((item, index) => {
          return (
            <li key={item}>
              <div>
                <h2>img {index + 1}</h2>
                <br />
                <img src={item} alt={item} height="200" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div>
      <h3>Please upload your photo here!</h3>
      <div>
        <input type="file" multiple onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      {DisplayImagesFromContainer()}
    </div>
  );
};

export default ImgUpload;
