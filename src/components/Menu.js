import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div className="container">
                <div className="logo-home">
                    <NavLink to="/">
                        <img className="icon-home"
                            src={`${process.env.PUBLIC_URL}/img/LogoHome.png`} alt="" />
                    </NavLink>
                </div>
                <div className="list-home">
                    <ul>
                        <li><NavLink activeClassName="active" exact to="/">TRANG CHỦ</NavLink></li>
                        <li><NavLink to="/seachteacher">TÌM GIA SƯ</NavLink></li>
                        <li><NavLink to="/registerteacher">ĐĂNG KÍ GIA SƯ</NavLink></li>
                        <li><NavLink to="/about">VỀ CHÚNG TÔI</NavLink></li>
                        <li><NavLink to="/contact">LIÊN HỆ</NavLink></li>
                    </ul>
                </div>
            </div >
        )
    }
}