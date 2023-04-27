import React from 'react';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Sorting from './Sorting';
import ColumnFilter from './ColumnFilter'
import './Table.css'


const FunctionalHeader = (props) => {
  const { column } = props

  return (
    <div >
      <Sorting column={column} />
      <ColumnFilter column={column} />
    </div>
  )
}
const Headers = (props) => {

  const { header } = props

  return (
    <tr key={'header'}>
      {
        header && header.map(h => {
          return (
            <React.Fragment>
              <th>
                <div className='header'>
                  <div >{h} </div>
                  <FunctionalHeader column={h} />
                </div>
              </th>
            </React.Fragment>
          )
        })
      }
    </tr>
  )
}

const mapStateToProps = (state) => {
  const { header } = state
  return { header }
};
export default connect(mapStateToProps, null)(Headers);