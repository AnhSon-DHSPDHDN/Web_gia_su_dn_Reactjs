import React, { Component } from 'react';
import MenuAdmin from '../MenuAdmin';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {
    actGetAllClassFromQueceRequest,
    actDeleteClassFromQueceRequest,
    actAddClassRequest
}
    from '../../../actions/index'

class ClassQuece extends Component {
    componentDidMount = () => {
        this.props.getAllClassQuece();
    }
    onDelete = (id) => {
        return this.props.deleteClassQuece(id);
    }
    onAccept = async (clas) => {
        await this.props.addClasses({
            student: clas.student,
            classRank: clas.classRank,
            subJects: clas.subJects,
            address: clas.address,
            salary: clas.salary,
            time: clas.time,
            dayInWeek: clas.dayinweek,
            request: clas.request,
            contact: clas.contact,
            createBy: clas.createBy,
            image: clas.image
        });
        return this.props.deleteClassQuece(clas.id);
    }
    showAllClass = (allClass) => {
        let result;
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
                        <button type="button" className="btn btn-success"
                            onClick={() => this.onAccept(clas)}
                        >Accept</button>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.onDelete(clas.id)}
                        >Delete</button>
                    </td>
                </tr>
            })
        }
        return result;
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
                        <h3 className="panel-title">List Class chờ phê duyệt</h3>
                    </div>
                    <div className="panel-body">
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
        allClass: state.classesquece
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllClassQuece: () => {
            dispatch(actGetAllClassFromQueceRequest())
        },
        deleteClassQuece: (id) => {
            dispatch(actDeleteClassFromQueceRequest(id))
        },
        addClasses: (classes) => {
            dispatch(actAddClassRequest(classes))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassQuece);