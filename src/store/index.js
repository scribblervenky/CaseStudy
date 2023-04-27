import { createStore } from 'redux'
import {storeReducer} from './reducers/storeReducer.js';

const appStore=createStore(storeReducer);

export default appStore;