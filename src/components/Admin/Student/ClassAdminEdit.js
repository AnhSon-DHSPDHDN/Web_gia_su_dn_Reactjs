import React, { Component } from 'react';
import {
    getClassByIDAPI,
    editClassAdminRequest
} from '../../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class ClassAdminEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: null,
            classrank: null,
            subjects: null,
            address: null,
            salary: null,
            time: null,
            dayinweek: null,
            request: null,
            contact: null,
            image: null
        }
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        return this.setState({
            [name]: value
        })
    }
    componentDidMount = () => {
        let id = this.props.match.params.id;
        return this.props.getClassByID(id);
    }
    onRegister = async (e) => {
        e.preventDefault();
        let inputStudent = await document.querySelector('#student').value;
        let inputClassrank = await document.querySelector('#classrank').value;
        let inputSubjects = await document.querySelector('#subjects').value;
        let inputAddress = await document.querySelector('#address').value;
        let inputSalary = await document.querySelector('#salary').value;
        let inputTime = await document.querySelector('#time').value;
        let inputDayinweek = await document.querySelector('#dayinweek').value;
        let inputRequest = await document.querySelector('#request').value;
        let inputContact = await document.querySelector('#contact').value;
        let inputImage = await document.querySelector('#image').value;
        await this.setState({
            student: inputStudent,
            classrank: inputClassrank,
            subjects: inputSubjects,
            address: inputAddress,
            salary: inputSalary,
            time: inputTime,
            dayinweek: inputDayinweek,
            request: inputRequest,
            contact: inputContact,
            image: inputImage
        })
        let id = await this.props.match.params.id;
        let { student, classrank, subjects, address, salary,
            time, dayinweek, request, contact, image } = await this.state;
        if (student && classrank && subjects && address && salary && time && dayinweek && request &&
            contact && image) {
            await this.props.editClassAdmin({
                student: student,
                classRank: classrank,
                subJects: subjects,
                address: address,
                salary: salary,
                time: time,
                dayInWeek: dayinweek,
                request: request,
                contact: contact,
                image: image,
                createBy: 'Admin'
            }, id)
            return this.props.history.push('/admin/classes');
        }
        return alert('Check input value')
    }
    render() {
        let { aclass } = this.props;
        let { student, classrank, subjects, address, salary, time,
            dayinweek, request, contact, image } = this.state;
        let isAdmin = localStorage.getItem('token') ?
            localStorage.getItem('token').split(' ')[1] : '';
        if (isAdmin !== 'true') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <form>
                        <h3>Edit Student</h3>
                        <div className="form-group">
                            <label>Học sinh:</label>
                            <input type="text"
                                name="student"
                                className="form-control" id="student"
                                placeholder="VD: Nam, số lượng 1"
                                onChange={this.onChange}
                                value={student ? student : (aclass.student ? aclass.student : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Cấp học:</label>
                            <input type="text"
                                name="classrank"
                                className="form-control" id="classrank"
                                placeholder="Vui lòng nhập cấp học"
                                onChange={this.onChange}
                                value={classrank ? classrank : (aclass.classRank ? aclass.classRank : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Môn học:</label>
                            <input type="text"
                                name="subjects"
                                className="form-control" id="subjects"
                                placeholder="Vui lòng nhập môn học"
                                onChange={this.onChange}
                                value={subjects ? subjects : (aclass.subJects ? aclass.subJects : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ:</label>
                            <input type="text"
                                name="address"
                                className="form-control" id="address"
                                placeholder="Vui lòng nhập địa chỉ"
                                onChange={this.onChange}
                                value={address ? address : (aclass.address ? aclass.address : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Mức lương chi trả:</label>
                            <input type="number"
                                name="salary"
                                className="form-control" id="salary"
                                placeholder="Vui lòng nhập số tiền chi trả"
                                onChange={this.onChange}
                                value={salary ? salary : (aclass.salary ? aclass.salary : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Số giờ dạy/ngày:</label>
                            <input type="text"
                                name="time"
                                className="form-control" id="time"
                                placeholder="Vui lòng nhập"
                                onChange={this.onChange}
                                value={time ? time : (aclass.time ? aclass.time : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Số buổi trên tuần:</label>
                            <input type="number"
                                name="dayinweek"
                                className="form-control" id="dayinweek"
                                placeholder="Vui lòng nhập số buổi"
                                onChange={this.onChange}
                                value={dayinweek ? dayinweek : (aclass.dayInWeek ? aclass.dayInWeek : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Yêu cầu thêm:</label>
                            <input type="text"
                                name="request"
                                className="form-control" id="request"
                                placeholder="Vui lòng nhập yêu cầu"
                                onChange={this.onChange}
                                value={request ? request : (aclass.request ? aclass.request : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Liên hệ:</label>
                            <input type="text"
                                name="contact"
                                className="form-control" id="contact"
                                placeholder="Vui lòng nhập SĐT hoặc email"
                                onChange={this.onChange}
                                value={contact ? contact : (aclass.contact ? aclass.contact : '')}
                                required>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Image minh họa:</label>
                            <input type="text"
                                name="image"
                                className="form-control" id="image"
                                placeholder="Vui lòng nhập link Image minh họa"
                                onChange={this.onChange}
                                value={image ? image : (aclass.image ? aclass.image : '')}
                                required>
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={this.onRegister}
                        >Lưu lại</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        aclass: state.classes
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getClassByID: (id) => {
            return dispatch(getClassByIDAPI(id))
        },
        editClassAdmin: (aclass, id) => {
            return dispatch(editClassAdminRequest(aclass, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassAdminEdit);