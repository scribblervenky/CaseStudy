import React from 'react';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { MdOutlineContentPasteSearch, MdOutlineCancel } from "react-icons/md";
import './Table.css'
import { setFiltering } from '../store/actions/storeActions';

const ColumnFilter = (props) => {

  const { column, setFiltering } = props
  const [show, setShow] = useState(false);

  const handleIconClick = () => {
    setShow(true)
  }

  const handleCancelClick = () => {
    setShow(false)
  }

  const handleFilter = (e) => {
    setFiltering({ key: e.target.value, column: column })
  }

  return (
    <React.Fragment>
      <MdOutlineContentPasteSearch onClick={handleIconClick} />
      {show &&
        <React.Fragment>
          <input className='search' type="text" onChange={handleFilter} placeholder='Search for ...' />
          <MdOutlineCancel onClick={handleCancelClick} />
          
        </React.Fragment>
      }
    </React.Fragment>
  )
}


const mapDispatchToProps = (dispatch) => ({
  setFiltering: (f) => dispatch(setFiltering(f))
});

export default connect(null, mapDispatchToProps)(ColumnFilter);