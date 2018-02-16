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
            gender: types.USER.GENDER.MAN,
            bodyType: types.USER.BODY_TYPE.NORMAL
        };

        this.handleSelectGender = ::this.handleSelectGender;
        this.handleSelectBodyType = ::this.handleSelectBodyType;
        this.handleClickButtonNext = ::this.handleClickButtonNext;
    }

    handleSelectGender(data) {
        this.props.handleSetGender(data.value);
    }

    handleSelectBodyType(data) {
        this.props.handleSetBodyType(data.value);
    }

    handleClickButtonNext(){
        this.props.history.push('/user/detail');
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={"content user"}>
                    <div>
                        <span className={"content-explain"}>피팅을 원하시는 회원님의 정보를 알려주세요.</span>
                    </div>
                    <div className={"select-box user"}>
                        <ToggleSelector label={'성별'}
                                        options={[
                                            {name: '남', value: types.USER.GENDER.MAN},
                                            {name: '여', value: types.USER.GENDER.WOMAN}
                                        ]}
                                        initIndex={0}
                                        selectCallback={this.handleSelectGender}
                                        />
                        <ButtonSelector label={'체형'}
                                        options={[
                                            {name: '마름', value: types.USER.BODY_TYPE.SLIM},
                                            {name: '보통', value: types.USER.BODY_TYPE.NORMAL},
                                            {name: '뚱뚱', value: types.USER.BODY_TYPE.CHUBBY}
                                        ]}
                                        initIndex={1}
                                        selectCallback={this.handleSelectBodyType}/>
                        <ScrollSelector/>
                    </div>
                    <BottomButton name={'다음으로 >>'} onClickListener={this.handleClickButtonNext} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSetGender: (gender) => {
            dispatch(actions.setGender(gender));
        },
        handleSetBodyType: (bodyType) => {
            dispatch(actions.setBodyType(bodyType));
        },
        handleSetHeight: (height) => {
            dispatch(actions.setHeight(height));
        }
    }
};

export default withRouter(connect(undefined, mapDispatchToProps)(User));