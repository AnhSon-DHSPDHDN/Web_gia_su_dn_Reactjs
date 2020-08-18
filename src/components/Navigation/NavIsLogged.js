import React, { Component } from 'react'

export default class NavIsLogged extends Component {
    onLogOut = async () => {
        await localStorage.removeItem('token');
        return window.location.href = '/login'
    }
    goPageAdmin = () => {
        return window.location.href = '/admin'
    }
    render() {
        let user = this.props.user.split(' ')[0];
        let permission = this.props.user.split(' ')[1];
        return (
            <div className="top-bar">
                <div className="container">
                    <div className="row-top-bar">
                        <ul>
                            <li>
                                <img className="icon-phone"
                                    src={`${process.env.PUBLIC_URL}/img/app.png`}
                                    alt="" />
                                <a href="tel:0334965080">0334965080</a>
                            </li>
                            <li>
                                <img className="icon-mail"
                                    src={`${process.env.PUBLIC_URL}/img/mailing.png`}
                                    alt="" />
                                <a href="tel:0334965080">anhson2121999@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row-top-bar-left">
                        <i>Xin Chào {user}{permission === 'true' ? '-Admin' : ''}</i>
                        <button type="button"
                            className="btn btn-success"
                            onClick={this.onLogOut}>Đăng Xuất</button>
                        {permission === 'true' ?
                            <button type="button" className="btn btn-primary" onClick={this.goPageAdmin}>Admin</button>
                            : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}
