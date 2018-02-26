import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../store/actions/index";

import Header from "../components/header";
import ToggleSelector from "../components/selectors/ToggleSelector";
import ButtonSelector from "../components/selectors/ButtonSelector";
import ScrollSelector from "../components/selectors/ScrollSelector";
import BottomButton from "../components/buttons/BottomButton";
import types from "../types";

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shoulder: types.USER.SHOULDER.NORMAL,
            arm: types.USER.ARM.NORMAL,
            leg: types.USER.LEG.NORMAL
        };

        this.handleSelectShoulder = ::this.handleSelectShoulder;
        this.handleSelectArm = ::this.handleSelectArm;
        this.handleSelectLeg = ::this.handleSelectLeg;
        this.handleClickButtonNext = ::this.handleClickButtonNext;
    }

    handleSelectShoulder(data) {
        this.props.handleSetShoulder(data.value);
    }

    handleSelectArm(data) {
        this.props.handleSetArm(data.value);
    }

    handleSelectLeg(data) {
        this.props.handleSetLeg(data.value);
    }

    handleClickButtonNext(){
        this.props.history.push('/clothes');
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={"content user"}>
                    <div>
                        <span className={"content-explain"}>더욱 정확한 피팅을 위해<br/> 자세하게 알려주세요! </span>
                    </div>
                    <div className={"select-box user"}>
                        <ButtonSelector label={'어깨'}
                                        options={[
                                            {name: '좁다', value: types.USER.SHOULDER.NARROW},
                                            {name: '보통', value: types.USER.SHOULDER.NORMAL},
                                            {name: '넓다', value: types.USER.SHOULDER.WIDE},
                                        ]}
                                        initIndex={1}
                                        selectCallback={this.handleSelectShoulder}/>
                        <ButtonSelector label={'팔'}
                                        options={[
                                            {name: '짧다', value: types.USER.ARM.SHORT},
                                            {name: '보통', value: types.USER.ARM.NORMAL},
                                            {name: '길다', value: types.USER.ARM.LONG},
                                        ]}
                                        initIndex={1}
                                        selectCallback={this.handleSelectArm}/>
                        <ButtonSelector label={'다리'}
                                        options={[
                                            {name: '짧다', value: types.USER.LEG.SHORT},
                                            {name: '보통', value: types.USER.LEG.NORMAL},
                                            {name: '길다', value: types.USER.LEG.LONG},
                                        ]}
                                        initIndex={1}
                                        selectCallback={this.handleSelectLeg}/>
                    </div>
                    <BottomButton name={'다음으로 >>'} onClickListener={this.handleClickButtonNext} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSetShoulder: (shoulder) => {
            dispatch(actions.setShoulder(shoulder));
        },
        handleSetArm: (arm) => {
            dispatch(actions.setArm(arm));
        },
        handleSetLeg: (leg) => {
            dispatch(actions.setLeg(leg));
        },
    }
};

export default withRouter(connect(undefined, mapDispatchToProps)(User));