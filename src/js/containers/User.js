import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'

import Header from '../components/header'

class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gender: state.user.gender,
        bodyType: state.user.bodyType,
        height: state.user.height
    };
};

const mapDispatchToProps = (dispatch) => {
    // 방법 1
    return {
        handleToggleGender: () => {
            dispatch(actions.toggleGender())
        },
        handleSetBodyType: (bodyType) => {
            dispatch(actions.setBodyType(bodyType))
        },
        handleSetHeight: (height) => {
            dispatch(actions.setHeight(height))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));