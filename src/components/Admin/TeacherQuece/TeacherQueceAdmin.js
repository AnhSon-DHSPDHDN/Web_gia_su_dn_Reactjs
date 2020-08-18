import React, { Component } from 'react';
import MenuAdmin from '../MenuAdmin';
import {
    actGetAllTeacherQueceRequest,
    actDeleteTeacherQueceRequest,
    actAddTeacherRequest
} from '../../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class TeacherQueceAdmin extends Component {

    componentDidMount = async () => {
        await this.props.getAllTeacherQuece();
    }

    showAllTeacherQuece = (allTeacherQuece) => {
        let result = null;
        if (allTeacherQuece.length > 0) {
            result = allTeacherQuece.map((teacher, index) => {
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
                        <button type="button" className="btn btn-success"
                            onClick={() => this.onAccept(teacher)}
                        >Accept</button>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.onDelete(teacher.id)}
                        >Delete</button>
                    </td>
                </tr>
            });
        }
        return result
    }
    onEdit = (id) => {
        return this.props.history.push(`teacher-quece/edit/${id}`)
    }

    onDelete = (id) => {
        return this.props.deleteTeacherQuece(id)
    }

    onAccept = async (teacher) => {
        await this.props.addTeacher({
            name: teacher.name,
            gender: teacher.gender,
            address: teacher.address,
            birthday: teacher.birthday,
            placeOfBirth: teacher.placeOfBirth,
            phone: teacher.phone,
            email: teacher.email,
            nowjob: teacher.nowjob,
            avatar: teacher.avatar,
            cmnd: teacher.cmnd,
            wish: teacher.wish,
            createBy: teacher.createBy,
            accept: true
        });
        return this.props.deleteTeacherQuece(teacher.id)
    }

    render() {
        let { allTeacherQuece } = this.props;
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
                        <h3 className="panel-title">List Gia sư chưa kiểm duyệt</h3>
                    </div>
                    <div className="panel-body">

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
                                {this.showAllTeacherQuece(allTeacherQuece)}
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
        allTeacherQuece: state.teacherQuece
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllTeacherQuece: () => {
            return dispatch(actGetAllTeacherQueceRequest())
        },
        deleteTeacherQuece: (id) => {
            return dispatch(actDeleteTeacherQueceRequest(id))
        },
        addTeacher: (teacher) => {
            return dispatch(actAddTeacherRequest(teacher))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherQueceAdmin);