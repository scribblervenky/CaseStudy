
const SET_DATA='SET_DATA';
const SET_HEADER='SET_HEADER';
const SET_FILTERING='SET_FILTERING';
const SET_SORTING='SET_SORTING';

const setData=(payload)=>{
  return {
    type:SET_DATA,
    payload
  };
}

const setHeader=(payload)=>{
  return {
    type:SET_HEADER,
    payload
  };
}

const setSorting=(payload)=>{
  return {
    type:SET_SORTING,
    payload
  };
}

const setFiltering=(payload)=>{
  return {
    type:SET_FILTERING,
    payload
  };
}

export {SET_HEADER, setHeader, SET_DATA, setData, SET_SORTING, setSorting, SET_FILTERING, setFiltering};