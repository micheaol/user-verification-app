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


export const setPasswordInitiate = (password, confirmPassword) => {
    return function (dispatch) {
        dispatch(setpasswordStart())
        axios
            .post("http://localhost:5000/api/v1/setpassword", {
                password,
                confirmPassword,
            }
            )
            .then((res) => {
                console.log("User signUp response", res.data)
                dispatch(setpasswordSuccess(res.data))
            })
            .catch((error) => dispatch(setpasswordFail(error.response.data.error[0].message)))
    }   
}