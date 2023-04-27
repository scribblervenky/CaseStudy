import {SET_DATA, SET_HEADER, SET_SORTING, SET_FILTERING} from '../actions/storeActions.js';

const initState = {
  data : [],
  header: [],
  sortOrder: null,
  sortColumn: null,
  filterKey: null,
  filterColumn: null
}
const storeReducer=(state=initState,action)=>{
  switch(action.type){
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }

    case SET_HEADER:
      return {
        ...state,
        header: action.payload
      }

    case SET_SORTING:
        return {
          ...state,
          sortOrder: action.payload.order,
          sortColumn: action.payload.column
        }
    
    case SET_FILTERING:
          return {
            ...state,
            filterKey: action.payload.key,
            filterColumn: action.payload.column
          }
    default:
      return state;
  }
}

export {storeReducer};