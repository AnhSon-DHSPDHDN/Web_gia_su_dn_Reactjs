import React, { Component } from 'react';
import MenuAdmin from './MenuAdmin';
import { Redirect } from 'react-router-dom';
import Intro from '../Home/Intro'

class Admin extends Component {
    render() {
        let isAdmin = localStorage.getItem('token') ?
            localStorage.getItem('token').split(' ')[1] : '';
        if (isAdmin !== 'true') {
            return <Redirect to="/" />
        }
        return (
            <div>
                <MenuAdmin />
                <Intro />
            </div>
        );
    }
}

export default Admin;