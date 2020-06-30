import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return (
            <div className="container">
                <div id="carousel-id" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-id" data-slide-to="0" className=""></li>
                        <li data-target="#carousel-id" data-slide-to="1" className=""></li>
                        <li data-target="#carousel-id" data-slide-to="2" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item">
                            <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide"
                                alt="First slide"
                                src={`${process.env.PUBLIC_URL}/img/banner1.jpg`} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Uy tín - Chất lượng.</h1>
                                    <p>Chúng tôi cam kết làm việc chuyên nghiệp và uy tín với chất lượng đảm bảo hàng đầu. Được thành lập với sứ mệnh mang lại niềm hạnh phúc cho quý gia đình trước sự tiến bộ của con em mình trong học tập</p>
                                    <p><a className="btn btn-lg btn-primary"
                                        href="/#"
                                        role="button">Sign up today</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide"
                                alt="Second slide"
                                src={`${process.env.PUBLIC_URL}/img/banner2.jpg`} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Chặng đường phát triển.</h1>
                                    <p>Phát triển trong bối cảnh nhu cầu dạy thêm - học thêm với hình thức gia sư tại nhà đang phát triển mạnh mẽ do guồng quay của cuộc sống khiến các bậc phụ huynh có ít thời gian cho con cái mình hơn</p>
                                    <p><a className="btn btn-lg btn-primary"
                                        href="/#"
                                        role="button">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="item active">
                            <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide"
                                alt="Third slide"
                                src={`${process.env.PUBLIC_URL}/img/banner3.jpg`} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Học - Học nữa - Học mãi.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" 
                                    href="
                                    #" role="button">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                    <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
                </div>
            </div>
        )
    }
}