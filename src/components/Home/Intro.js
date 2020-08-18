import React, { Component } from 'react'
import './home.css';

class Intro extends Component {
    render() {
        return (
            <div className="container-fluid-main"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                            <p>Đi lên từ nền tảng vững chắc ở cả ba vị trí:
                                Học sinh, sinh viên và phụ huynh,
                                 tập thể Gia sư Đà Nẵng luôn lắng nghe và thấu hiểu những tâm tư nguyện vọng của phụ huynh học sinh.
                                  Đặc biệt trong bối cảnh nhu cầu “dạy thêm – học thêm” với hình thức gia sư tại nhà đang phát triển
                                   mạnh mẽ do guồng quay của cuộc sống khiến các bậc phụ huynh có ít thời gian dành cho con cái mình hơn.
                                   <br></br>
                                <br></br>
                                Gia sư Đà Nẵng được xem là một trong những thương hiệu tiên phong và là
                                 địa chỉ tin cậy trong lĩnh vực bồi dưỡng văn hóa tại nhà ở khu vực Đà Nẵng lúc bấy giờ.
                                  Kinh qua 2 năm kinh nghiệm trong lĩnh vực tư vấn và cung ứng giáo viên dạy kèm tại nhà,
                                   Gia sư Đà Nẵng được quý vị phụ huynh hài lòng khi tìm kiếm được
                                   "Giải pháp tối ưu cho việc học tập của con em phụ huynh".
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            <div className="video">
                                <video controls autoPlay>
                                    <source src={`${process.env.PUBLIC_URL}/img/intro.mp4`}></source>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro
