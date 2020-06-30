import React, { Component } from 'react';
import {
    actFetchUsersRequest,
    actDeleteUserRequest
} from '../../../actions/index';
import { connect } from 'react-redux'
import MenuAdmin from '../MenuAdmin';

class UserAdmin extends Component {

    componentDidMount = () => {
        this.props.getAllUsers();
    }

    showAllUsers = (allUsers) => {
        let result = null;
        if (allUsers.length > 0) {
            result = allUsers.map((user, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.passWord}</td>
                    <td>{user.isAdmin.toString()}</td>
                    <td>
                        <button type="button" className="btn btn-danger">Edit</button>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.onDelete(user.id)}
                        >Delete</button>
                    </td>
                </tr>
            });
        }
        return result;
    }

    onDelete = (id) => {
        this.props.deleteUser(id);
    }

    render() {
        let { allUsers } = this.props;
        return (
            <div className="container">
                <MenuAdmin />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">List User</h3>
                    </div>
                    <div className="panel-body">

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>IsAdmin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAllUsers(allUsers)}
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allUsers: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllUsers: () => {
            dispatch(actFetchUsersRequest())
        },
        deleteUser: (id) => {
            dispatch(actDeleteUserRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin);