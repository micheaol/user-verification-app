import * as types from '../types/user';

const initialState = {
    user: null,
    loading: false,
    error: false,
};

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

export default userReducer;