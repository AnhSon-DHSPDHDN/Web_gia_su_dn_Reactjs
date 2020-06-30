import React, { Component } from 'react';
import MenuAdmin from '../MenuAdmin';
import { connect } from 'react-redux';
import { actFetchAllClassesAPI } from './../../../actions/index'

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
                        <button type="button" className="btn btn-danger">Edit</button>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.onDelete(clas.id)}
                        >Delete</button>
                    </td>
                </tr>
            });
        }
        return result;
    }

    render() {
        let { allClass } = this.props;
        return (
            <div className="container">
                <MenuAdmin />
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">List Class</h3>
                    </div>
                    <div class="panel-body">

                        <button type="button" class="btn btn-success">ADD NEW CLASS</button>

                        <table class="table table-bordered table-hover">
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
            dispatch(actFetchAllClassesAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassesAdmin);