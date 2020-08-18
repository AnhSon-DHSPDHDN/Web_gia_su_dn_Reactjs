import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

class Class extends Component {
    render() {
        let { classRoom } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                <div className="item">
                    <Link to={`/detail/${classRoom.id}`}>
                        <img className="imgClass" src={classRoom.image} alt=""></img>
                        <ul>
                            <li>{classRoom.classRank}</li>
                            <li>Số buổi: {classRoom.dayInWeek} buổi/tuần</li>
                            <li>Lương: {classRoom.salary}/tháng</li>
                        </ul>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Class
