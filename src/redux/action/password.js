import * as types from '../types/user';
import axios from 'axios';

export const setpasswordStart = () => ({
    type: types.SET_USER_PASSWORD_START
});

export const setpasswordSuccess = (payload) => ({
    type: types.SET_USER_PASSWORD_SUCCESS,
    payload
});

export const setpasswordFail = (error) => ({
    type: types.SET_USER_PASSWORD_FAIL,
    payload: error
});


export const setPasswordInitiate = (password, confirmPassword, token) => {
    return function (dispatch) {
        dispatch(setpasswordStart())
        axios
            .post(`${process.env.REACT_APP_BASE_URL}password`,
            { password, confirmPassword }, 
            {  headers: {
                "x-auth-token": token,
                "Content-Type": "application/json",
              }
             })
            .then((res) => {
                    dispatch(setpasswordSuccess(res))
                })
                .catch((error) => console.log(error))
    }   
}