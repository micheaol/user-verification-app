import * as types from '../types/user';
import axios from 'axios';

export const signUpUserStart = () => ({
    type: types.REGISTER_USER_START
});

export const signUpUserSuccess = (token) => ({
    type: types.REGISTER_USER_SUCCESS,
    payload: token
});

export const signUpUserFail = (error) => ({
    type: types.REGISTER_USER_FAIL,
    payload: error
});


export const signUpInitiate = (email, firstName, lastName) => {
    return function (dispatch) {
        dispatch(signUpUserStart())
        axios
            .post("http://localhost:5000/api/v1/users", {
                firstName,
                lastName,
                email,
            })
            .then((res) => {
                console.log("User signUp response", res)
                dispatch(signUpUserSuccess(res))
            })
            .catch((error) => dispatch(signUpUserFail(error.message)))
    }   
}