import React from 'react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { setData } from '../store/actions/storeActions';
import './Table.css'
import Rows from './Rows'
import Headers from './Headers'

function PaginatedTable(props) {

  const { currentItems } = props;
  return (
    <div>
      <table>
        <thead>
          <Headers />
        </thead>
        <tbody>
          {
            currentItems && currentItems.map(item => <Rows row={item} />)
          }
        </tbody>
      </table>
    </div>
  );

}



function Table(props) {
  const { data, sortOrder, sortColumn, filterKey, filterColumn } = props

  let fData = [...data]
  if (sortOrder == 'asc')
    fData = data.sort((a, b) => a[sortColumn].localeCompare(b[sortColumn]))

  if (sortOrder == 'desc')
    fData = data.sort((a, b) => b[sortColumn].localeCompare(a[sortColumn]))

  if (filterKey)
    fData = data.filter(f => f[filterColumn].toLowerCase().startsWith(filterKey.toLowerCase()))


  const itemsPerPage = 20
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = fData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(fData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % fData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <PaginatedTable currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  const {
    data,
    sortOrder,
    sortColumn,
    filterKey,
    filterColumn
  } = state
  return { data, sortOrder, sortColumn, filterKey, filterColumn }
};
const mapDispatchToProps = (dispatch) => ({
  setData: (d) => dispatch(setData(d))
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);