import * as types from '../types/user';
import { SET_USER_PASSWORD_SUCCESS } from './../types/user';

const initialState = {
    data: null,
    error: null
};

 const passwordReducer = (state = initialState, { type, payload}) => {
     switch (type) {
         case types.SET_USER_PASSWORD_START:
             return {
                 ...state
             };
         case SET_USER_PASSWORD_SUCCESS:
             return{
                 data: payload
             }
         case types.SET_USER_PASSWORD_FAIL:
             return {
                 ...state,
                 error: payload
             }
     
         default:
             return {
                 ...state
             };
     }
 }

 export default passwordReducer;