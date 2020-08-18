import React, { Component } from 'react';
import { actGetAllTeacherRequest } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ListTeachers extends Component {

    componentDidMount = () => {
        return this.props.getAllTeachers();
    }
    showAllTeachers = (teachers) => {
        let result = null;
        if (teachers.length > 0) {
            result = teachers.map((teacher, index) => {
                return <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" key={index}>
                    <Link to={`teacher/${teacher.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <img
                            alt=""
                            style={{ width: '220px', height: '250px' }}
                            src={teacher.avatar}></img>
                        <h5 style={{ textAlign: 'center' }}>{teacher.name}</h5>
                    </Link>
                </div>
            })
        }
        return result;
    }
    render() {
        let { teachers } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="row">
                    {this.showAllTeachers(teachers)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        teachers: state.teachers
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllTeachers: () => {
            return dispatch(actGetAllTeacherRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTeachers);
