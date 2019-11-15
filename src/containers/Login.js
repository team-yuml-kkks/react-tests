import React from 'react';
import { connect } from 'react-redux';
import { fetchLoginRequest } from '../actions';

let Login = ({ dispatch }) => {
    let usernameInput;
    let passwordInput;

    function login(e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        dispatch(fetchLoginRequest({ username, password }));
    }

    return (
        <div>
            <form onSubmit={login}>
                <label>Login: </label>
                <input ref={node => { usernameInput = node}} type="text"/>

                <label>Password: </label>
                <input ref={node => { passwordInput = node}} type="password"/>

                <input type="submit" value="Sign in"/>
            </form>
        </div>
    )
}

Login = connect()(Login)

export default Login
