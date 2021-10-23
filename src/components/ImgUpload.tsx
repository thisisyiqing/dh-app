import React, {useState} from 'react';
import uploadFileToBlob from '../azure-storage-blob';

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

    return (
        <div>
            <h3>
                Please upload your photo here!
            </h3>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>
                    Upload
                </button>
            </div>
        </div>
    )
}

export default ImgUpload