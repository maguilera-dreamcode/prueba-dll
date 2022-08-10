import React, { useState } from 'react';
import getMetaData from '../utils/getMetaData'
const axios = require('axios');

const FileUploadPage = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedBase64, setSelectedBase64] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const getBase64 = (file) => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      console.log(file);

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };


  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
    getBase64(e.target.files[0]).then(result => {
      const res = result.split("base64,")
      setSelectedBase64(res[1])
      console.log("File Is", res[1]);
      console.log("File Is 2", e.target.files[0]);
    })
      .catch(err => {
        console.log(err);
      });

  };

  const handleSubmission = async () => {
    const payload = {
      file_name: selectedFile.name,
      content: selectedBase64,
    }

    let res = await axios.post('http://localhost:3010/getMetaDataAPi', payload);
    console.log(res.data);
  };




  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
          <p style={{ overflow: "initial"}}  >
            {selectedBase64}
          </p>
        </div>
      ) : (
        <p style={{ maxWidth: "100vw" }}>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  )
}

export default FileUploadPage