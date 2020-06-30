import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux';
import { actFetchUsersRequest } from '../../actions/index';
import { Redirect, Link } from 'react-router-dom'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        this.props.fetchAllUsers()
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    onLogin = (e) => {
        e.preventDefault()
        let { username, password } = this.state;
        let { users } = this.props;
        let check = users.find(user => {
            if (user.userName === username && user.passWord === password) {
                return user;
            }
            return null;
        });
        if (check) {
            localStorage.setItem('token', check.userName + ' ' + check.isAdmin);
            return window.location.href = "/"
        }
        alert('Incorrect username or password');
    }
    render() {
        if (localStorage.getItem('token')) {
            return <Redirect to="/" />
        }
        return (
            <div className="login">
                <div className="container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg1.jpg)` }}>
                    <form className="box">
                        <h1>Login</h1>
                        <input type="text" name="username"
                            placeholder="Username"
                            required
                            onChange={this.onChange}
                        ></input>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={this.onChange}
                        ></input>
                        <button type="summit" onClick={this.onLogin}>Login</button>
                        <Link to='/register'>Register</Link>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(actFetchUsersRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);