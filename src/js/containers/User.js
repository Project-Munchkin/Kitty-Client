import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../store/actions/index";

import Header from "../components/header";
import ToggleSelector from "../components/selector/ToggleSelector";
import ButtonSelector from "../components/selector/ButtonSelector";
import ScrollSelector from "../components/selector/ScrollSelector";

class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={"content user"}>
                    <div className={"select-box user"}>
                        <ToggleSelector/>
                        <ButtonSelector label={'체형'} options={['마름', '보통', '통통']} initIndex={1} selectCallback/>
                        <ScrollSelector/>
                        <ButtonSelector label={'어깨'} options={['좁다', '보통', '넓다']} initIndex={1}/>
                        <ButtonSelector label={'팔'} options={['짧다', '보통', '길다']} initIndex={1}/>
                        <ButtonSelector label={'다리'} options={['짧다', '보통', '길다']} initIndex={1}/>
                    </div>
                    <div className="button-next">
                        <a>다음으로 >></a>
                    </div>
                </div>
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