import {
    AUTH_FAILED,
    AUTH_REQUESTED,
    AUTH_SUCCEEDED
} from './actions';

export const authenticate = (userInfo = {}, action = 'login') => {
    return async (dispatch, getState, args) => {
        const {backendService} = args;
        const actionMap = {
            login: backendService.login.bind(backendService),
            register: backendService.register.bind(backendService)
        };
        dispatch({type: AUTH_REQUESTED});
        const {data: {data}, error} = await actionMap[action](userInfo);
        if (error) {
            return dispatch({
                type: AUTH_FAILED,
                payload: error.message
            })
        }
        return dispatch({
            type: AUTH_SUCCEEDED,
            payload: data
        })
    }
};