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
                <div className="content">
                    <div className="content-explain">
                        <span>
                            피팅을 원하시는 회원님의 <br/>정보를 알려주세요!
                        </span>
                    </div>
                    <div className="select-box user">
                        <div className="selector toggle">
                            <span className="label">성별</span>
                            <div className="options">남</div>
                        </div>
                        <div className="selector click">
                            <span className="label">체형</span>
                            <div className="options">
                                <ul>
                                    {  /* [D] 선택된 것은 active 클래스 */}
                                    <li className="active">통통</li>
                                    <li>보통</li>
                                    <li>마름</li>
                                </ul>
                            </div>
                        </div>
                        <div className="selector scroll">
                            <span className="label">키</span>
                            <div className="options">
                                <option>
                                    170cm
                                </option>
                            </div>
                        </div>
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