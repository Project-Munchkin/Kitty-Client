import React, {Component} from "react";

import ButtonSelector from './ButtonSelector'
import types from "../../../../pc/js/types";

class Step01 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"step-box"}>
                <ButtonSelector label={'성별'}
                                options={[
                                    {name: '남성', value: types.USER.GENDER.MAN},
                                    {name: '여성', value: types.USER.GENDER.WOMAN}
                                ]}
                                initIndex={0}
                                selectCallback={this.handleSelectBodyType}/>
                <ButtonSelector label={'체형'}
                                options={[
                                    {name: '마름', value: types.USER.BODY_TYPE.SLIM},
                                    {name: '보통', value: types.USER.BODY_TYPE.NORMAL},
                                    {name: '뚱뚱', value: types.USER.BODY_TYPE.CHUBBY}
                                ]}
                                initIndex={1}
                                selectCallback={this.handleSelectBodyType}/>
                <div>
                    <div className={"selector height"}>
                        <span className={"label"}>키(cm)</span>
                        <input type={}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step01;