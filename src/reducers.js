import { combineReducers } from 'redux'

import {
    FETCH_LOGIN,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
} from './actions';


const assign = (state, newState) => Object.assign({}, state, newState);

const initialState = {
    isFetching: false,
    user: {},
    token: null,
    error: {},
};


function login(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGIN:
            return assign(state, { isFetching: true });

        case FETCH_LOGIN_SUCCESS:
            const { response: { user, token }} = action;
            return assign(state, { isFetching: false, user, token });

        case FETCH_LOGIN_FAILURE:
            const { response: { data }} = action.error;
            return assign(state, { isFetching: true, error: data });

        default:
            return state;
    }
}

const reducer = combineReducers({
    login
})

export default reducer
