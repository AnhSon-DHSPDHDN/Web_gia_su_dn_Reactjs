import React, { Component } from 'react';
import MenuAdmin from '../MenuAdmin';
import { connect } from 'react-redux';
import {
    actFetchAllClassesAPI,
    deleteClassAdminRequest
} from './../../../actions/index';
import { Redirect } from 'react-router-dom'

class ClassesAdmin extends Component {

    componentDidMount = () => {
        this.props.getAllClass();
    }

    showAllClass = (allClass) => {
        let result = null;
        if (allClass.length > 0) {
            result = allClass.map((clas, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{clas.student}</td>
                    <td>{clas.classRank}</td>
                    <td>{clas.subJects}</td>
                    <td>{clas.salary}</td>
                    <td>{clas.request}</td>
                    <td>
                        <button type="button"
                            className="btn btn-danger"
                            onClick={() => this.onEdit(clas.id)}
                        >Edit</button>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.onDelete(clas.id)}
                        >Delete</button>
                    </td>
                </tr>
            });
        }
        return result;
    }
    onEdit = (id) => {
        return this.props.history.push(`classes/edit/${id}`);
    }
    onDelete = (id) => {
        return this.props.deleteClass(id)
    }
    onAddNewClass = () => {
        return this.props.history.push('classes/add');
    }

    render() {
        let { allClass } = this.props;
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
                        <h3 className="panel-title">List Class</h3>
                    </div>
                    <div className="panel-body">

                        <button type="button" className="btn btn-success"
                            onClick={this.onAddNewClass}>ADD NEW CLASS</button>

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Student</th>
                                    <th>Lớp</th>
                                    <th>Môn học</th>
                                    <th>Lương</th>
                                    <th>Yêu cầu thêm</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAllClass(allClass)}
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
        allClass: state.classes
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllClass: () => {
            return dispatch(actFetchAllClassesAPI())
        },
        deleteClass: (id) => {
            return dispatch(deleteClassAdminRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassesAdmin);