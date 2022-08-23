import axios from 'axios'
import { returnErrors } from './ErrorActions'
import { USER_LOADING, USER_LOADED, 
    AUTH_ERROR, LOGIN_SUCCESS, 
    LOGIN_FAIL, LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, REGISTER_FAIL } from './Types';

//Check token & load User
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING});
    
   

    axios.get('/api/auth/user', tokenConfig(getState))
         .then(res => 
            dispatch({
            type: USER_LOADED,
            payload: res.data
         })
         )
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status ));
            dispatch({
            type: AUTH_ERROR
         })
        })
}

// Setup config/headers and token

export const tokenConfig = getState => {
     //Get token from localStorage
     const token = getState().auth.token;

     //Headers
     const config = {
         headers: {
             "content-type": "application/json"
         }
     }
 
     //If token, Add to headers
     if(token) {
         config.headers['x-auth-token'] = token;
     }
     return config;
}