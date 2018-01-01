import React, {Component} from 'react'

import { connect, bindActionCreators } from 'react-redux'
import * as actions from '../store/actions/index'

class User extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>user</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gender: state.user.gender,
        bodyType : state.user.bodyType,
        height: state.user.height
    };
};

const mapDispatchToProps = (dispatch) => {
    // 방법 1
    return {
        handleToggleGender : () => { dispatch(actions.toggleGender())},
        handleSetBodyType : (bodyType) => { dispatch(actions.setBodyType(bodyType))},
        handleSetHeight : (height) => { dispatch(actions.setHeight(height))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);