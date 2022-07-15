import * as types from '../types/user';
import axios from 'axios';

export const signUpUserStart = () => ({
    type: types.REGISTER_USER_START
});

export const signUpUserSuccess = (payload) => ({
    type: types.REGISTER_USER_SUCCESS,
    payload
});

export const signUpUserFail = (error) => ({
    type: types.REGISTER_USER_FAIL,
    payload: error
});

export const fetchUserStart = () => ({
    type: types.GET_USER_PROFILE_START
});

export const fetchUserSuccess = (payload) => ({
    type: types.GET_USER_PROFILE_SUCCESS,
    payload
});

export const fetchUserFail = (error) => ({
    type: types.GET_USER_PROFILE_FAIL,
    payload: error
});


export const signUpInitiate = (firstName, lastName, email) => {
    return function (dispatch) {
        dispatch(signUpUserStart())
        axios
            .post("http://localhost:5000/api/v1/users",
              {
                firstName,
                lastName,
                email,
            }
            )
            .then((res) => {
                console.log("User signUp response", res.data)
                dispatch(signUpUserSuccess(res.data))
            })
            .catch((error) => dispatch(signUpUserFail(error.response.data.error[0].message)))
    }   
}

export const getUserInitiate = (token) => {
    return function (dispatch) {
        dispatch(fetchUserStart())
        axios
        .get('http://localhost:5000/api/v1/password/me', {
            headers: {
                "x-auth-token": token,
                "Content-Type": "application/json",
              }
        })
        .then((res) => {
            console.log("Hello from Profile API")
            console.log("From Profile API =>", res.data.user)
            dispatch(fetchUserSuccess(res.data.user))
        })
        .then((err) => {
            dispatch(fetchUserFail(err))
        } )
    }
}