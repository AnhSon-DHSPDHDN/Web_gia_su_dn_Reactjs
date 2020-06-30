import React, { Component } from 'react';
import './admin.css';
import { Link } from 'react-router-dom';

class MenuAdmin extends Component {
    render() {
        return (
            <div className="menu-admin">
                <ul>
                    <li><Link to="/admin/users">USERS</Link></li>
                    <li><Link to="/admin/teacher-quece">TEACHER_QUECE</Link></li>
                    <li><Link to="/admin/teacher">TEACHER</Link></li>
                    <li><Link to="/admin/classes">CLASS</Link></li>
                    <li><Link to="/admin/class-quece">CLASS_QUECE</Link></li>
                </ul>
            </div>
        );
    }
}

export default MenuAdmin;