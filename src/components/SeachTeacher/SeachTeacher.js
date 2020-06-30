import React, { Component } from 'react';
import Banner from '../Banner'
import FormregisterStudent from './FormregisterStudent';
import ListTeachers from './ListTeachers';

export default class SeachTeacher extends Component {
    render() {
        return (
            <div>
                <Banner />
                <div className="container">
                    <h4 style={{ textAlign: 'center' }}>DANH SÁCH GIA SƯ</h4>
                    <div className="row">
                        <FormregisterStudent />
                        <ListTeachers />
                    </div>
                </div>
            </div>
        )
    }
}