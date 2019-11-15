import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            msg: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    login(event) {
        const { state: { username, password }} = this;
        const payload = { username, password };

        axios.post('http://localhost:8000/rest-auth/login/', payload).then((response) => {
            console.log(response.data)
            this.setState({ msg: 'Login successfull' });
        }).catch(() => {
            this.setState({ msg: 'Login failed' });
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label>Login: </label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.login}
                        onChange={this.handleChange}/>

                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}/>

                    <input type="submit" value="Sign in"/>
                </form>

                <p>{this.state.msg}</p>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
