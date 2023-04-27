
import React from 'react';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { MdOutlineContentPasteSearch, MdSortByAlpha } from "react-icons/md";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import { setSorting } from '../store/actions/storeActions';

const Sorting = (props) => {
    const { setSorting, column } = props
    const [sortArrow, setSortArrow] = useState(null);

    const handleSort = (order) => {
        setSortArrow(order)
        setSorting({ order, column })
    }

    return (
        <React.Fragment>
            {sortArrow == 'asc' && <BsSortAlphaDown onClick={() => handleSort('desc')} />}
            {sortArrow == 'desc' && <BsSortAlphaUp onClick={() => handleSort()} />}
            {!sortArrow && <MdSortByAlpha onClick={() => handleSort('asc')} />}
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setSorting: (f) => dispatch(setSorting(f))
});
export default connect(null, mapDispatchToProps)(Sorting);