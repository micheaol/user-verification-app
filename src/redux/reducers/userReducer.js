import * as types from '../types/user';

const initialState = [];

const userReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.REGISTER_USER_START:
            return {
                loading: true,
                ...state
            };
        case types.GET_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                token: payload
            };
        case types.REGISTER_USER_FAIL:
            return {
                loading: false,
                error: payload
            }
    
        default:
            return{
                ...state
            };
    }
}