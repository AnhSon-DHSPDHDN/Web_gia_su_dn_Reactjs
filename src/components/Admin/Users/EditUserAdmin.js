import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    actGetUserByIDRequest,
    actEditUserRequest
} from '../../../actions/index';
import { Redirect } from 'react-router-dom';

class EditUserAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            passWord: null,
            isAdmin: false
        }
    }

    componentDidMount = async () => {
        let id = this.props.match.params.id;
        await this.props.getUserByID(id)
    }

    onChange = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        await this.setState({
            [name]: value
        })
    }

    onClick = async () => {
        let checkbox = document.querySelector('#check-admin');
        await this.setState({
            isAdmin: checkbox.checked
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let inputUsername = await document.querySelector('#user-input')
        let inputPassword = await document.querySelector('#pass-input')
        await this.setState({
            userName: inputUsername.value,
            passWord: inputPassword.value
        })
        let { userName, passWord, isAdmin } = this.state;
        let id = this.props.match.params.id;
        await this.props.updateUser({
            userName,
            passWord,
            isAdmin
        }, id)
        return this.props.history.push('/admin/users')
    }

    render() {
        let { user } = this.props;
        let { userName, passWord } = this.state;
        let isAdmin = localStorage.getItem('token') ?
            localStorage.getItem('token').split(' ')[1] : '';
        if (isAdmin !== 'true') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <h4 style={{ textAlign: 'center' }}>Edit User</h4>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form>
                            <div className="form-group">
                                <label>Username:</label>
                                <input type="text"
                                    className="form-control" id="user-input"
                                    placeholder="Username"
                                    required
                                    onChange={this.onChange}
                                    value={userName ? userName : (user.length > 0 ? user[0].userName : '')}
                                    name="userName"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="text"
                                    className="form-control" id="pass-input"
                                    placeholder="Password"
                                    required
                                    value={passWord ? passWord : (user.length > 0 ? user[0].passWord : '')}
                                    onChange={this.onChange}
                                    name="passWord"
                                >
                                </input>
                            </div>
                            <div className="form-group">

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="check-admin"
                                            onClick={() => this.onClick()}
                                        />
                                        Is Admin
                                    </label>
                                </div>

                            </div>
                            <button type="submit" className="btn btn-primary"
                                onClick={this.onSubmit}
                            >Lưu</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getUserByID: (id) => {
            return dispatch(actGetUserByIDRequest(id))
        },
        updateUser: (user, id) => {
            return dispatch(actEditUserRequest(user, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserAdmin);