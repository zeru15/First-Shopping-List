import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {};

const middleware = [thunk];

const Store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)) 
    )

export default Store;