import React, {Component} from "react";

import ButtonSelector from "./ButtonSelector";
import types from "../../types";

class Step02 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"step-box step02"}>
                <ButtonSelector label={'어깨 넓이'}
                                options={[
                                    {name: '좁다', value: types.USER.SHOULDER.NARROW},
                                    {name: '보통', value: types.USER.SHOULDER.NORMAL},
                                    {name: '넓다', value: types.USER.SHOULDER.WIDE},
                                ]}
                                initIndex={1}
                                selectCallback={this.handleSelectShoulder}/>
                <ButtonSelector label={'팔 길이'}
                                options={[
                                    {name: '짧다', value: types.USER.ARM.SHORT},
                                    {name: '보통', value: types.USER.ARM.NORMAL},
                                    {name: '길다', value: types.USER.ARM.LONG},
                                ]}
                                initIndex={1}
                                selectCallback={this.handleSelectArm}/>
                <ButtonSelector label={'다리 길이'}
                                options={[
                                    {name: '짧다', value: types.USER.LEG.SHORT},
                                    {name: '보통', value: types.USER.LEG.NORMAL},
                                    {name: '길다', value: types.USER.LEG.LONG},
                                ]}
                                initIndex={1}
                                selectCallback={this.handleSelectLeg}/>
            </div>
        )
    }
}

export default Step02;