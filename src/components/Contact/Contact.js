import React, { Component } from 'react';
import './contact.css';
import Banner from './../Banner'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Banner />
                <div className="container">
                    <h4>THÔNG TIN LIÊN HỆ</h4>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Địa chỉ: Số 1 Lê Thanh Nghị, phường Hòa Cường, quận Hải Châu, TP Đà Nẵng
						</li>
                        <li>
                            <i className="fas fa-phone"></i>
                            Điện thoại: 0334.965.080
									</li>
                        <li>
                            <i className="fas fa-envelope-square"></i>
                            Email: anhson2121999@gmail.com
						</li>
                        <li>
                            <i className="fas fa-blog"></i>
                            Website: https://www.giasudn.com
						</li>
                    </ul>
                    <p>Chúng tôi xin chân thành cảm ơn quý phụ huynh, quý thầy cô giáo và các bạn sinh viên,
                         học sinh đã dành thời gian quý báu để tìm hiểu về Gia Sư Đà Nẵng
                         . Mọi thông tin liên hệ về việc tìm gia sư, đăng ký làm gia sư, góp ý xây dựng trung tâm vui lòng hệ về
                          Công Ty theo các số hotline của trung tâm hoặc gởi thông tin liên hệ theo mẫu sau.
                           Bộ phận dịch vụ chúng tôi cam kết phản hồi cho quý khách hàng trong thời gian sớm nhất!.
                        <br></br>
                        Xin chân thành cảm ơn !
                    </p>
                </div>
            </div>
        )
    }
}