import React from 'react';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {setData} from '../store/actions/storeActions';
import { MdEditDocument, MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import './Table.css'

const Rows = (props) => {

    const {row, data} = props
    const [edit, setEdit] = useState(false);

    const [storeId, setStoreId] = useState(row.store_id);
    const [sku, setSku] = useState(row.sku);
    const [productName, setProductName] = useState(row.product_name);
    const [price, setPrice] = useState(row.price);
    const [expiryDate, setExpiryDate] = useState(row.expiry_date);
    
    const handleEdit = () => {
      setEdit(true)
    }

    const handleCorrect = () => {
      const modified = data.map(data => {
        if(data.sku === row.sku){
          return {
            store_id: storeId,
            sku: sku,
            product_name: productName,
            price: price,
            expiry_date: expiryDate
          }
        }
        return data
      })
      props.setData(modified)
      setEdit(false)
    }

    const handleCancel = () => {
      setEdit(false)
    }

          
    return (
      <tr key={row.sku}>
      {
        edit ? (
          <React.Fragment>
            <td><input type="text" defaultValue={row.store_id} onChange={event => setStoreId(event.target.value)}/></td>
            <td><input type="text" defaultValue={row.sku} onChange={event => setSku(event.target.value)}/></td>
            <td><input type="text" defaultValue={row.product_name} onChange={event => setProductName(event.target.value)}/></td>
            <td><input type="text" defaultValue={row.price} onChange={event => setPrice(event.target.value)}/></td>
            <td><input type="date" defaultValue={row.expiry_date} onChange={event => setExpiryDate(event.target.value)}/></td>
            <td><TiTick onClick={handleCorrect}/><MdOutlineCancel onClick={handleCancel}/></td>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <td>{row.store_id}</td>
            <td>{row.sku}</td>
            <td>{row.product_name}</td>
            <td>{row.price}</td>
            <td>{row.expiry_date}</td>
            <td><MdEditDocument onClick={handleEdit}/></td>
          </React.Fragment>
        )
      } 
      </tr>
    )
  }

const mapStateToProps = (state) => {
  const { data, header } = state
  return { data, header }
};
const mapDispatchToProps = (dispatch) => ({
  setData:(d)=>dispatch(setData(d))
});
export default connect(mapStateToProps, mapDispatchToProps)(Rows);