import React, { Component } from 'react';
import {
    actGetTeacherQueceByIDRequest,
    actEditTeacherQueceRequest
} from '../../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class TeacherQueceAdminEdit extends Component {
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
    componentDidMount = async () => {
        let id = this.props.match.params.id;
        await this.props.getTeacherQueceByID(id)
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
        e.preventDefault()
        let id = await this.props.match.params.id;
        let inputName = await document.querySelector('#input-name');
        let inputAddress = await document.querySelector('#input-address');
        let inputBirthday = await document.querySelector('#input-birthday');
        let inputPlaceOfBirth = await document.querySelector('#input-placeOfBirth');
        let inputPhone = await document.querySelector('#input-phone');
        let inputEmail = await document.querySelector('#input-email');
        let inputNowjob = await document.querySelector('#input-nowjob');
        let inputAvatar = await document.querySelector('#input-avatar');
        let inputCMND = await document.querySelector('#input-cmnd');
        let inputWish = await document.querySelector('#input-wish');

        await this.setState({
            name: inputName.value,
            address: inputAddress.value,
            birthday: inputBirthday.value,
            placeOfBirth: inputPlaceOfBirth.value,
            phone: inputPhone.value,
            email: inputEmail.value,
            nowjob: inputNowjob.value,
            avatar: inputAvatar.value,
            cmnd: inputCMND.value,
            wish: inputWish.value
        })
        let { genderM, genderN, gender, name, address, birthday, placeOfBirth, phone,
            email, nowjob, avatar, cmnd, wish } = this.state;
        if (genderM === false && genderN === false) {
            return alert('Gender is nulllll!!!!!!!!')
        }
        genderM ? gender = 'Nam' : (genderN ? gender = 'Nữ' : gender = null);
        let createBy = await this.props.teacherQuece.createBy;
        await this.props.editTeacherQuece({
            name: name,
            address: address,
            birthday: birthday,
            placeOfBirth: placeOfBirth,
            phone: phone,
            email: email,
            nowjob: nowjob,
            avatar: avatar,
            cmnd: cmnd,
            wish: wish,
            gender,
            createBy,
            accept: false
        }, id)
        return this.props.history.push('/admin/teacher-quece');
    }
    onChange = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        await this.setState({
            [name]: value
        })
    }

    render() {
        let { teacherQuece } = this.props;
        let { name, address, birthday, placeOfBirth,
            phone, email, nowjob, avatar, cmnd, wish } = this.state;
        let isAdmin = localStorage.getItem('token') ?
            localStorage.getItem('token').split(' ')[1] : '';
        if (isAdmin !== 'true') {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="container">
                    <h4 style={{ textAlign: 'center' }}>Edit Teacher Quece</h4>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label>Họ và tên:</label>
                                    <input type="text"
                                        className="form-control" id="input-name"
                                        placeholder="Vui lòng nhập họ tên"
                                        required
                                        onChange={this.onChange}
                                        name="name"
                                        value={name ? name : (teacherQuece.name ? teacherQuece.name : '')}
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
                                        className="form-control" id="input-address"
                                        placeholder="Vui lòng nhập địa chỉ"
                                        onChange={this.onChange}
                                        required
                                        name="address"
                                        value={address ? address : (teacherQuece.address ? teacherQuece.address : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Năm sinh:</label>
                                    <input type="number"
                                        className="form-control" id="input-birthday"
                                        placeholder="Vui lòng nhập năm sinh"
                                        onChange={this.onChange}
                                        required
                                        name="birthday"
                                        value={birthday ? birthday : (teacherQuece.birthday ? teacherQuece.birthday : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Nơi sinh:</label>
                                    <input type="text"
                                        className="form-control" id="input-placeOfBirth"
                                        placeholder="Vui lòng nhập nơi sinh"
                                        onChange={this.onChange}
                                        required
                                        name="placeOfBirth"
                                        value={placeOfBirth ? placeOfBirth : (teacherQuece.placeOfBirth ? teacherQuece.placeOfBirth : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại:</label>
                                    <input type="text"
                                        className="form-control" id="input-phone"
                                        placeholder="Vui lòng nhập SĐT"
                                        onChange={this.onChange}
                                        required
                                        name="phone"
                                        value={phone ? phone : (teacherQuece.phone ? teacherQuece.phone : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="text"
                                        className="form-control" id="input-email"
                                        placeholder="Vui lòng nhập email"
                                        onChange={this.onChange}
                                        required
                                        name="email"
                                        value={email ? email : (teacherQuece.email ? teacherQuece.email : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Hiện là:</label>
                                    <input type="text"
                                        className="form-control" id="input-nowjob"
                                        placeholder="Vui lòng nhập nghề nghiệp hiện tại"
                                        onChange={this.onChange}
                                        required
                                        name="nowjob"
                                        value={nowjob ? nowjob : (teacherQuece.nowjob ? teacherQuece.nowjob : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Hình đại diện:</label>
                                    <input type="text"
                                        className="form-control" id="input-avatar"
                                        placeholder="Vui lòng nhập link ảnh đại diện"
                                        onChange={this.onChange}
                                        required
                                        name="avatar"
                                        value={avatar ? avatar : (teacherQuece.avatar ? teacherQuece.avatar : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Chứng minh nhân dân:</label>
                                    <input type="text"
                                        className="form-control" id="input-cmnd"
                                        placeholder="Vui lòng nhập link ảnh CMND"
                                        onChange={this.onChange}
                                        required
                                        name="cmnd"
                                        value={cmnd ? cmnd : (teacherQuece.cmnd ? teacherQuece.cmnd : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Nguyện vọng dạy:</label>
                                    <input type="text"
                                        className="form-control" id="input-wish"
                                        placeholder="TIEUHOC, THCS, THPT, DH"
                                        onChange={this.onChange}
                                        required
                                        name="wish"
                                        value={wish ? wish : (teacherQuece.wish ? teacherQuece.wish : '')}
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teacherQuece: state.teacherQuece
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getTeacherQueceByID: (id) => {
            return dispatch(actGetTeacherQueceByIDRequest(id))
        },
        editTeacherQuece: (teacher, id) => {
            return dispatch(actEditTeacherQueceRequest(teacher, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherQueceAdminEdit);