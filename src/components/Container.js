import React from 'react';
import { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {setData, setHeader} from '../store/actions/storeActions';
import Table from './Table'
import Papa from 'papaparse'
import './Container.css'

function Counter (props) {

  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = event => { 
    setSelectedFile(event.target.files[0]); 
  }; 

  const onFileUpload = () => { 
    const formData = new FormData(); 

    formData.append( 
      "myFile", 
      selectedFile, 
      selectedFile.name 
    ); 

    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {

        props.setHeader(results.meta.fields)
        props.setData(results.data)
      },
    });
   
  }
  
  return (
      <div>
        <div className='upload'>
          <input type="file" accept='.csv' onChange={onFileChange} /> 
          <button onClick={onFileUpload}> 
            Upload
          </button> 
        </div>
        <Table/>
      </div>
  )
}
const mapStateToProps=(state)=>({

});
const mapDispatchToProps=(dispatch)=>({
  setHeader:(d)=>dispatch(setHeader(d)),
  setData:(d)=>dispatch(setData(d))
});
export default connect(mapStateToProps,mapDispatchToProps)(Counter);