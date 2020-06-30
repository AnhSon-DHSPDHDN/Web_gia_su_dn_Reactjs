import React, { Component } from 'react';
import { actGetAllTeacherRequest } from '../../../actions/index';
import { connect } from 'react-redux';
import MenuAdmin from '../MenuAdmin';

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
                        <button type="button" className="btn btn-danger">Edit</button>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.onDelete(teacher.id)}
                        >Delete</button>
                    </td>
                </tr>
            });
        }
        return result;
    }

    render() {
        let { allTeacher } = this.props;
        return (
            <div className="container">
                <MenuAdmin />
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">List Gia Sư</h3>
                    </div>
                    <div class="panel-body">

                        <table class="table table-bordered table-hover">
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherAdmin);