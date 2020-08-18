import React, { Component } from 'react';
import { actAddTeacherRequest } from '../../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class AddTeacherAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            gender: null,
            address: null,
            birthday: null,
            placeOfBirth: null,
            phone: null,
            email: null,
            nowjob: null,
            avatar: null,
            cmnd: null,
            wish: null,
            genderM: false,
            genderN: false
        }
    }
    onChange = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        await this.setState({
            [name]: value
        })
    }
    onClick = async (e) => {
        let { genderM, genderN } = this.state;
        let checkboxMan = document.querySelector('.genderM');
        let checkboxWoMan = document.querySelector('.genderN');
        if (genderM) {
            checkboxWoMan.checked = false;
        }
        if (genderN) {
            checkboxMan.checked = false;
        }
        let name = e.target.name
        let checked = e.target.checked;
        await this.setState({
            [name]: checked
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        let { name, gender, address, birthday, placeOfBirth,
            phone, email, nowjob, avatar, cmnd, wish, genderM, genderN } = this.state;
        genderM ? gender = 'Nam' : (genderN ? gender = 'Nữ' : gender = null);
        let createBy = localStorage.getItem('token') ?
            localStorage.getItem('token').split(' ')[0]
            : null;
        if (createBy) {
            if (name && gender && address && birthday && placeOfBirth
                && phone && email && nowjob && avatar && cmnd && wish) {
                await this.props.addTeacher({
                    name,
                    gender,
                    address,
                    birthday,
                    placeOfBirth,
                    phone,
                    email,
                    nowjob,
                    avatar,
                    cmnd,
                    wish,
                    createBy,
                    accept: true
                })
                await alert('Dăng ký thành công');
                return this.props.history.push('/admin/teacher');
            }
            return alert('Vui lòng điền đầy đủ các thông tin cần thiết')
        }
        return alert('Bạn phải đăng nhập để thực hiện chức năng này')
    }
    render() {
        let isAdmin = localStorage.getItem('token') ?
            localStorage.getItem('token').split(' ')[1] : '';
        if (isAdmin !== 'true') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <h4 style={{ textAlign: 'center' }}>ADD GIA SƯ</h4>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form>
                            <div className="form-group">
                                <label>Họ và tên:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập họ tên"
                                    required
                                    onChange={this.onChange}
                                    name="name"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Giới tính:</label>
                                <label>
                                    <input type="checkbox" style={{ marginLeft: `10px` }}
                                        name="genderM"
                                        onClick={this.onClick}
                                        className="genderM"
                                    >
                                    </input>
                                    Nam
                                </label>
                                <label>
                                    <input type="checkbox" style={{ marginLeft: `10px` }}
                                        name="genderN"
                                        onClick={this.onClick}
                                        className="genderN"
                                    ></input>
                                    Nữ
                                </label>
                            </div>
                            <div className="form-group">
                                <label>Địa chỉ:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập địa chỉ"
                                    onChange={this.onChange}
                                    required
                                    name="address"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Năm sinh:</label>
                                <input type="number"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập năm sinh"
                                    onChange={this.onChange}
                                    required
                                    name="birthday"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Nơi sinh:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập nơi sinh"
                                    onChange={this.onChange}
                                    required
                                    name="placeOfBirth"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập SĐT"
                                    onChange={this.onChange}
                                    required
                                    name="phone"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập email"
                                    onChange={this.onChange}
                                    required
                                    name="email"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Hiện là:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập nghề nghiệp hiện tại"
                                    onChange={this.onChange}
                                    required
                                    name="nowjob"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Hình đại diện:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập link ảnh đại diện"
                                    onChange={this.onChange}
                                    required
                                    name="avatar"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Chứng minh nhân dân:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="Vui lòng nhập link ảnh CMND"
                                    onChange={this.onChange}
                                    required
                                    name="cmnd"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Nguyện vọng dạy:</label>
                                <input type="text"
                                    className="form-control" id=""
                                    placeholder="TIEUHOC, THCS, THPT, DH"
                                    onChange={this.onChange}
                                    required
                                    name="wish"
                                >
                                </input>
                            </div>
                            <button type="submit" className="btn btn-primary"
                                onClick={this.onSubmit}
                            >Lưu lại</button>
                        </form>
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
const mapDispatchToProp = (dispatch, props) => {
    return {
        addTeacher: (teacher) => {
            return dispatch(actAddTeacherRequest(teacher))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(AddTeacherAdmin);