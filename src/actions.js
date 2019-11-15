import axios from 'axios';

export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

export function fetchLogin() {
    return { type: FETCH_LOGIN }
}

export function loginError(error) {
    return { type: FETCH_LOGIN_FAILURE, error }
}

export function loginSuccess(response) {
    return { type: FETCH_LOGIN_SUCCESS, response }
}

export function fetchLoginRequest(payload) {
    return function(dispatch) {
        dispatch(fetchLogin());

        axios.post('http://localhost:8000/rest-auth/login/', payload)
            .then(({ data }) => dispatch(loginSuccess(data)))
            .catch(error => dispatch(loginError(error)))
    }
}
