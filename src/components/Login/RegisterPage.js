import React, { Component } from 'react'
import './login.css';
import {
    actFetchUsersRequest,
    actFetchNewUserRequest
} from '../../actions/index';
import { connect } from 'react-redux';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repassword: ''
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
    onRegister = () => {
        let { username, password, repassword } = this.state;
        let { users } = this.props;
        let check = null;
        if (password === repassword && username !== '' && password !== '') {
            check = users.find(user => {
                if (user.userName === username) {
                    return user;
                }
                return null;
            })
            if (check === undefined) {
                this.props.fetchNewUser({
                    userName: username,
                    passWord: password,
                    isAdmin: false
                });
                alert('Account registration successful');
                return window.location.href = "/login";
            } else return alert('usersname is uses');
        }
        return alert('incorrect password');
    }
    render() {
        return (
            <div className="login">
                <div className="container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg1.jpg)` }}>
                    <form className="box">
                        <h1>Register</h1>
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
                        <input type="password"
                            name="repassword"
                            placeholder="Re write password"
                            required
                            onChange={this.onChange}
                        ></input>
                        <button type="button" onClick={this.onRegister}>Register</button>
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

const mapDisPatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(actFetchUsersRequest())
        },
        fetchNewUser: (user) => {
            dispatch(actFetchNewUserRequest(user))
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(RegisterPage);