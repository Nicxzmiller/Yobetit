import {
    AUTH_FAILED,
    AUTH_REQUESTED,
    AUTH_SUCCEEDED,
    LOGOUT
} from '../actions';

const initialState = {
    username: '',
    email: '',
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: null
};

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case AUTH_REQUESTED:
            return {...state, isLoading: true};
        case AUTH_SUCCEEDED:
            return {...state, isLoading: false, error: null, isLoggedIn: true, ...payload};
        case AUTH_FAILED:
            return {...state, isLoading: false, error: payload};
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}