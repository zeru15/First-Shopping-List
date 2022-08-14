import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/Index'

const initialState = {};

const middleware = [thunk];

const Store = createStore(
    rootReducer, 
    initialState, 
    compose(applyMiddleware(...middleware)) 
    )

export default Store;