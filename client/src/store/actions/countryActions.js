
export const fetchAllCountries = () => {
    return async (dispatch, getState, args) => {
        const {backendService} = args;
        const {user: {token}} = getState();
        const {data: {data}, error} = await backendService.getAllCountries(token);
        if (error) {
            return dispatch({
                type: 'GET_ALL_COUNTRIES_FAILED',
                payload: error.message
            })
        }
        return dispatch({
            type: 'GET_ALL_COUNTRIES_SUCCEEDED',
            payload: data
        })
    }
};