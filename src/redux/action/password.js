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
    let headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
    return function (dispatch) {
        dispatch(setpasswordStart())
        axios
            .post("http://localhost:5000/api/v1/password",
            { password, confirmPassword }, 
            {  headers: {
                "x-auth-token": token,
                "Content-Type": "application/json",
              }
             })
            .then((res) => {
                    console.log(password, confirmPassword, token)
                    console.log("password response", res)
                    dispatch(setpasswordSuccess(res))
                })
                .catch((error) => console.log(error))
    }   
}