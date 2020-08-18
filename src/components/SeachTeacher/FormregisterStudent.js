import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actFetchNewClassQueceRequest } from './../../actions/index';

class FormregisterStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: '',
            classrank: '',
            subjects: '',
            address: '',
            salary: '',
            time: '',
            dayinweek: '',
            request: '',
            contact: '',
            image: ''
        }
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }
    onRegister = async (e) => {
        e.preventDefault();
        let user = await localStorage.getItem('token')
        let { student, classrank, subjects, address,
            salary, time, dayinweek, request, contact, image } = await this.state
        if (user) {
            if (student !== '' && classrank !== '' && subjects !== '' && address !== '' && salary !== ''
                && time !== '' && dayinweek !== '' && request !== '' && contact !== '' && image !== '') {
                let createBy = await user.split(' ')[0];
                await this.props.fetchNewClassQuece({
                    student: student,
                    classRank: classrank,
                    subJects: subjects,
                    address: address,
                    salary: salary,
                    time: time,
                    dayinweek: dayinweek,
                    request: request,
                    contact: contact,
                    image: image,
                    createBy: createBy,
                    accept: false
                });
                await alert('Đăng ký thành công! Chúng tôi sẽ kiểm tra thông tin và gửi yêu cầu của bạn')
                return window.location.href = '/'
            }
            return alert('Vui lòng điền đầy đủ các trường')
        } else return alert("Bạn phải đăng nhập mới có thể sử dụng chức năng này")

    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <form>
                    <h3>Đăng ký học (dễ tìm kiếm gia sư hơn)</h3>
                    <div className="form-group">
                        <label>Học sinh:</label>
                        <input type="text"
                            name="student"
                            className="form-control" id=""
                            placeholder="VD: Nam, số lượng 1"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Cấp học:</label>
                        <input type="text"
                            name="classrank"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập cấp học"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Môn học:</label>
                        <input type="text"
                            name="subjects"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập môn học"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ:</label>
                        <input type="text"
                            name="address"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập địa chỉ"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Mức lương chi trả:</label>
                        <input type="number"
                            name="salary"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập số tiền chi trả"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Số giờ dạy/ngày:</label>
                        <input type="number"
                            name="time"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Số buổi trên tuần:</label>
                        <input type="number"
                            name="dayinweek"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập số buổi"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Yêu cầu thêm:</label>
                        <input type="text"
                            name="request"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập yêu cầu"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Liên hệ:</label>
                        <input type="text"
                            name="contact"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập SĐT hoặc email"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Image minh họa:</label>
                        <input type="text"
                            name="image"
                            className="form-control" id=""
                            placeholder="Vui lòng nhập link Image minh họa"
                            onChange={this.onChange}
                            required>
                        </input>
                    </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={this.onRegister}
                    >Lưu lại</button>
                </form>
            </div>
        )
    }
}

const mapStateTopProps = (state) => {
    return {
        classQuece: state.classesquece
    }
}
const mapDisPatchToProps = (dispatch, props) => {
    return {
        fetchNewClassQuece: (classquece) => {
            return dispatch(actFetchNewClassQueceRequest(classquece))
        }
    }
}

export default connect(mapStateTopProps, mapDisPatchToProps)(FormregisterStudent);
