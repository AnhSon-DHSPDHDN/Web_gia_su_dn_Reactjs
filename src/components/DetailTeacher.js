import React, { Component } from 'react';
import { actGetTeacherByIDRequest } from '../actions/index';
import { connect } from 'react-redux';

class DetailTeacher extends Component {
    componentDidMount = async () => {
        let id = await this.props.match.params.id;
        return this.props.getTeacherByID(id)
    }
    render() {
        let { teacher } = this.props
        return (
            <div className="detail">
                <h4 style={{ textAlign: 'center' }}>CHI TIẾT THÔNG TIN GIA SƯ</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                            <img src={teacher.avatar} alt='' style={{ width: '300px' }}></img>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8">
                            <ul>
                                <li>Địa chỉ: {teacher.address}</li>
                                <li>Sinh năm: {teacher.birthday}</li>
                                <li>Nguyên quán: {teacher.placeOfBirth}</li>
                                <li>Số điện thoại: {teacher.phone}</li>
                                <li>Địa chỉ email: {teacher.email}</li>
                                <li>Công việc hiện tại: {teacher.nowjob}</li>
                                <li>Số CMND: {teacher.cmnd}</li>
                                <li>Nguyện vọng dạy: {teacher.wish}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        teacher: state.teachers
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getTeacherByID: (id) => {
            return dispatch(actGetTeacherByIDRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTeacher);