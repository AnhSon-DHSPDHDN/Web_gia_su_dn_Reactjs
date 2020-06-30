import React, { Component } from 'react'

class Nav extends Component {
    onRedirecLogin = () => {
        window.location.href = "/login"
    }
    onRedirecRegister = () => {
        window.location.href = "/register"
    }
    render() {
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
                        <button type="button"
                            className="btn btn-primary"
                            onClick={this.onRedirecLogin}>Đăng nhập</button>
                        <button type="button"
                            className="btn btn-success"
                            onClick={this.onRedirecRegister}>Đăng kí</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
