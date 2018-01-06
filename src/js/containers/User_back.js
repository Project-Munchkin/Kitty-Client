import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../store/actions';

import GenderSelect from "../components/GenderSelect";
import BodyTypeSelect from "../components/BodyTypeSelect";
import HeightSelect from "../components/HeightSelect";

class User extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(this.props));
        this.props.history.push('/select');
    }

    render() {
        return (
            <div>
                <p className={'user-title'}>
                    피팅을 원하시는 회원님의<br/>
                    정보를 알려주세요!
                </p>
                <form onSubmit={this.onSubmit}>
                    <GenderSelect value={this.props.gender} onSelect={this.props.handleToggleGender}/>
                    <BodyTypeSelect value={this.props.bodyType} onSelect={this.props.handleSetBodyType}/>
                    <HeightSelect value={this.props.height} onSelect={this.props.handleSetHeight} startValue={140} endValue={200}/>
                    <button className={'user-next'} type={'submit'}>다음으로》</button>
                </form>
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
        handleToggleGender: (gender) => {
            dispatch(actions.toggleGender(gender))
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