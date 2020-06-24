import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {BackendService} from '../services/BackendServices';
import {createReducer} from './reducers';

export function createAppStore () {
    const backendService = new BackendService();
    const reducers = combineReducers(createReducer());
    const devTool = typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f;
    const store = createStore(reducers, compose(applyMiddleware(thunk.withExtraArgument({ backendService})), devTool));

    return store;
}