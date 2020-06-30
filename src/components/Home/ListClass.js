import React, { Component } from 'react'
import './home.css'
import { actFetchAllClassesAPI } from '../../actions/index';
import { connect } from 'react-redux'

const Class = React.lazy(() => import('./Class'))

class ListClass extends Component {

    componentDidMount() {
        this.props.fetchAllClasses()
    }

    showClasses = () => {
        let result = null;
        let { classes } = this.props;
        if (classes.length > 0) {
            result = classes.map((clas, index) => {
                return <Class key={index} classRoom={clas} />
            })
        }
        return result;
    }

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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.classes
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllClasses: () => {
            dispatch(actFetchAllClassesAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListClass);
