import userReducer from './userReducer';

export const createReducer = () => {
    return {
        user: userReducer
    }
};