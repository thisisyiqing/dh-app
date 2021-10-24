import React, {useState} from 'react';
import uploadFileToBlob from '../azure-storage-blob';
import Button from 'react-bootstrap/Button';

const ImgUpload = () => {

    const [blobList, setBlobList] = useState<string[]>([]);
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files == null) {
            return;
        }
        setFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        if(!file) {
            return;
        }

        const blobsInContainer: string[] = await uploadFileToBlob(file);
        setBlobList(blobsInContainer);
        console.log(blobsInContainer);

        setFile(undefined);
    }

    // display file name and image
  const DisplayImagesFromContainer = () => (
    <div style={{marginTop: "30px"}}>
      <h2 style={{fontFamily: 'raleway', fontSize: "20px"}}>Your Uploads:</h2>
      <ul style={{listStyleType: "none"}}>
        {blobList.map((item, index) => {
          if(index < 3) {
            return (   
              <li key={item} style={{display: 'flex', justifyContent: 'center', marginLeft: "-10px", marginBottom:"10px"}}>
                <div style={{marginLeft: "-100px", marginTop:"-5px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16" style={{marginLeft: "-150px"}}>
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{fontFamily: 'raleway', fontSize: "15px", marginLeft: "-130px"}}>img {index + 1}</h2>
                  <img src={item} alt={item} height="100" style={{marginLeft: "-150px"}} />
                </div>
              </li>
            );
          } else if(index == 3){
            return (  
                <li key={item} style={{display: 'flex', marginLeft: "-10px", marginTop: "-408px", marginBottom:"10px"}}>
                  <div style={{marginLeft: "-100px", marginTop:"-5px", marginBottom: "5px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16" style={{marginLeft: "290px"}}>
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 style={{fontFamily: 'raleway', fontSize: "15px", marginLeft: "10px"}}>img {index + 1}</h2>
                    <img src={item} alt={item} height="100" style={{marginLeft: "-15px"}} />
                  </div>
                </li>
              );
          } else {
            return (  
              <li key={item} style={{display: 'flex', marginLeft: "-10px"}}>
                <div style={{marginLeft: "-100px", marginTop:"-5px", marginBottom: "5px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16" style={{marginLeft: "290px"}}>
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{fontFamily: 'raleway', fontSize: "15px", marginLeft: "10px"}}>img {index + 1}</h2>
                  <img src={item} alt={item} height="100" style={{marginLeft: "-15px"}} />
                </div>
              </li>
            );
          }
          
        })}
      </ul>
    </div>
  );

    return (
        <div style={{marginLeft: "-200px"}}>
            <h3 style={{fontFamily: 'raleway', fontSize: "30px"}}>
                Please upload your photo here!
            </h3>
            <div style={{marginTop: "20px"}}>
                <input type="file" multiple onChange={handleFileChange} />
                <Button style={{backgroundColor:"#6C5CE7", border: '1px solid #6C5CE7', borderRadius: '7px', fontFamily: 'raleway', fontSize: "16px"}} 
                onClick={handleUpload} size="sm">
                &nbsp;Upload&nbsp;
                </Button>
            </div>
            {DisplayImagesFromContainer()}
        </div>
    )
}

export default ImgUpload