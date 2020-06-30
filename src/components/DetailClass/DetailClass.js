import React, { Component } from 'react'
import { actFetchAllClassesAPI } from './../../actions/index';
import { connect } from 'react-redux';
import ListClass from './../Home/ListClass'

class DetailClass extends Component {
    componentDidMount() {
        this.props.fetchAllClass()
    }
    render() {
        let { match } = this.props;
        let allClass = this.props.aclass;
        let aclassArr = allClass.filter(aclass => aclass.id.toString() === match.params.id)
        let aclass = aclassArr[0] || [];
        return (
            <div className="detail">
                <h4 style={{ textAlign: 'center' }}>CHI TIẾT LỚP HỌC</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                            <img src={aclass.image} alt='' style={{ width: '300px' }}></img>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8">
                            <ul>
                                <li>Địa chỉ: {aclass.address}</li>
                                <li>HS lớp: {aclass.classRank}</li>
                                <li>Nhận lớp vui lòng liên hệ: {aclass.contact}</li>
                                <li>Được tạo bởi: {aclass.createBy}</li>
                                <li>Số buổi dạy trong tuần: {aclass.dayInWeek}</li>
                                <li>Yêu cầu của phụ huynh: {aclass.request}</li>
                                <li>Lương: {aclass.salary}/tháng</li>
                                <li>Học sinh: {aclass.student}</li>
                                <li>Môn học: {aclass.subJects}</li>
                                <li>Số giờ lên lớp: {aclass.time}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <ListClass />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        aclass: state.classes
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllClass: () => {
            dispatch(actFetchAllClassesAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailClass);
