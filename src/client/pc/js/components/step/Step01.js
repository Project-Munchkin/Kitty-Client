import React, {Component} from "react";

import ButtonSelector from "./ButtonSelector";
import types from "../../../../pc/js/types";

class Step01 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
                            <div>
                                <span className={"label"}>키 <span className={"point"}>(cm)</span></span>
                                <input className={"options"} type="Number" placeholder={"자신의 키를 적어주세요"}/>
                            </div>
                            <div>
                                <span className={"sub-desc"}>* 0.5 cm는 반올림처리 됩니다.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"step-buttons"}>
                    <span><a href="#">다음 단계로</a></span>
                </div>
                <hr className={"underline"}/>
            </div>
        )
    }
}

export default Step01;