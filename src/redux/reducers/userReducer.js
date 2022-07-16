import * as types from '../types/user';

const initialState = {
    user: [],
    loading: false,
    error: false,
    token: null,
    data: []
};

const userReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case types.REGISTER_USER_START:
            return {
                loading: true,
                ...state
            };
        case types.REGISTER_USER_SUCCESS:
            return {
                loading: false,
                token: payload
            };
        case types.REGISTER_USER_FAIL:
            return {
                loading: false,
                error: payload
            }
        case types.GET_USER_PROFILE_START:
            return {
                loading: true,
                ...state
            }
        case types.GET_USER_PROFILE_SUCCESS:
            return {
                loading: false,
                data: payload
            }
        case types.GET_USER_PROFILE_FAIL:
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