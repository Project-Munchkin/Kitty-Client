import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions";

import ShoulderSelect from "../components/ShoulderSelect";
import ArmSelect from "../components/ArmSelect";
import LegSelect from "../components/LegSelect";

class Select extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let oUser = JSON.parse(localStorage.getItem('user'));
        oUser = Object.assign( oUser, this.props);
        localStorage.setItem('user', JSON.stringify(oUser));
        this.props.history.push('/result');
    }

    render() {
        return (
            <div>
                <p className={'user-title'}>
                    감사합니다!<br/>
                    더욱 정확한 피팅을 위해<br/>
                    자세하게 알려주세요!
                </p>
                <form onSubmit={this.onSubmit}>
                    <ShoulderSelect value={this.props.shoulder} onSelect={this.props.handleSetShoulder}/>
                    <ArmSelect value={this.props.arm} onSelect={this.props.handleSetArm}/>
                    <LegSelect value={this.props.leg} onSelect={this.props.handleSetLeg}/>
                    <button className={'user-next'} type={'submit'}>다음으로》</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shoulder: state.user.shoulder,
        arm: state.user.arm,
        leg: state.user.leg
    };
};

const mapDispatchToProps = (dispatch) => {
    // 방법 1
    return {
        handleSetShoulder: (shoulder) => {
            dispatch(actions.setShoulder(shoulder))
        },
        handleSetArm: (arm) => {
            dispatch(actions.setArm(arm))
        },
        handleSetLeg: (leg) => {
            dispatch(actions.setLeg(leg))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Select));