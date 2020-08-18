import React, { Component } from 'react';
import {
    actGetAllTeacherRequest,
    actDeleteTeacherRequest
} from '../../../actions/index';
import { connect } from 'react-redux';
import MenuAdmin from '../MenuAdmin';
import { Redirect } from 'react-router-dom'

class TeacherAdmin extends Component {

    componentDidMount = () => {
        this.props.getAllTeacher();
    }

    showAllTeacher = (allTeacher) => {
        let result = null;
        if (allTeacher.length > 0) {
            result = allTeacher.map((teacher, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.gender}</td>
                    <td>{teacher.address}</td>
                    <td>{teacher.birthday}</td>
                    <td>{teacher.phone}</td>
                    <td>
                        <button type="button" className="btn btn-danger"
                            onClick={() => this.onEdit(teacher.id)}
                        >Edit</button>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.onDelete(teacher.id)}
                        >Delete</button>
                    </td>
                </tr>
            });
        }
        return result;
    }

    onEdit = (id) => {
        return this.props.history.push(`teacher/edit/${id}`)
    }

    onAddTeacher = () => {
        return this.props.history.push('teacher/add');
    }

    onDelete = (id) => {
        return this.props.deleteTeacher(id);
    }

    render() {
        let { allTeacher } = this.props;
        let isAdmin = localStorage.getItem('token') ?
            localStorage.getItem('token').split(' ')[1] : '';
        if (isAdmin !== 'true') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <MenuAdmin />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">List Gia Sư</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success"
                            onClick={this.onAddTeacher}
                        >ADD NEW TEACHER</button>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Giới tính</th>
                                    <th>Địa chỉ</th>
                                    <th>Năm sinh</th>
                                    <th>SĐT</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAllTeacher(allTeacher)}
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
        allTeacher: state.teachers
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllTeacher: () => {
            return dispatch(actGetAllTeacherRequest())
        },
        deleteTeacher: (id) => {
            return dispatch(actDeleteTeacherRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherAdmin);