import React, { Component } from 'react';

class ListMore extends Component {
    render() {
        return (
            <div className="list-class" style={{ textAlign: `center` }}>
                <h4>CÁC LỚP HIỆN CÓ</h4>
                <div className="container">
                    <div className="row">
                        {this.showClasses()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListMore;