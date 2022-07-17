import * as types from '../types/user';
import axios from 'axios';
import _ from 'lodash';

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
            .post(`${process.env.REACT_APP_BASE_URL}users`,
              {
                firstName,
                lastName,
                email,
            }
            )
            .then((res) => {
                dispatch(signUpUserSuccess(res.data))
            })
            .catch((error) => dispatch(signUpUserFail(error.response.data.error[0].message)))
    }   
}

export const getUserInitiate = (token) => {
    return function (dispatch) {
        dispatch(fetchUserStart())
        axios
        .get(`${process.env.REACT_APP_BASE_URL}password/me`, {
            headers: {
                "x-auth-token": token,
                "Content-Type": "application/json",
              }
        })
        .then((res) => {
            const receivedUsers = res.data.user;
            const convertUser = [];
            _.forEach(receivedUsers, (receivedUser) => convertUser.push(receivedUser))
            
            dispatch(fetchUserSuccess(convertUser))
        })
        .then((err) => {

        } )
    }
}