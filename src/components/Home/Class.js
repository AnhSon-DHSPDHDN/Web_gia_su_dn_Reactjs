import React, { Component } from 'react';
import './home.css'

class Class extends Component {
    render() {
        let { classRoom } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                <img className="imgClass" src={classRoom.image} alt=""></img>
                <ul>
                    <li>{classRoom.classRank}</li>
                    <li>Số buổi: {classRoom.dayInWeek} buổi/tuần</li>
                    <li>Lương: {classRoom.salary}/tháng</li>
                </ul>
                <a href={`/detail/${classRoom.id}`} className="btn btn-primary">CHI TIẾT</a>
            </div>
        )
    }
}

export default Class
