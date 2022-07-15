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