import React from 'react';
import './home.css';

function ListBlockGS() {
    return (
        <div className="container">
            <div className="block-1">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <img src={`${process.env.PUBLIC_URL}/img/image1.jpg`}
                            alt=""
                        ></img>
                        <div>
                            <a href="/#">GIA SƯ TIỂU HỌC</a>
                            <p>Gia sư dạy kèm Tiểu học giúp các em tự tin những bước đầu tiên trên con đường chinh phục tri thức.</p>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <img src={`${process.env.PUBLIC_URL}/img/image2.jpg`}
                            alt=""
                        ></img>
                        <div>
                            <a href="/#">GIA SƯ THCS</a>
                            <p>Gia sư trung học cơ sở giúp các em phát huy tối đa khả năng, tạo mắc xích quan trọng cho năm học cấp 3.</p>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <img src={`${process.env.PUBLIC_URL}/img/image3.jpg`}
                            alt=""
                        ></img>
                        <div>
                            <a href="/#">GIA SƯ THPT</a>
                            <p>Gia sư trung học phổ thông đảm bảo kiến thức vững chắc để các em bước vào giảng đường đại học.</p>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <img src={`${process.env.PUBLIC_URL}/img/image4.jpg`}
                            alt=""
                        ></img>
                        <div>
                            <a href="/#">GIA SƯ LUYỆN THI ĐH</a>
                            <p>Gia sư luyện thi - Trợ thủ đắc lực giúp các em vượt qua các kỳ thi quan trọng nhất.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListBlockGS;