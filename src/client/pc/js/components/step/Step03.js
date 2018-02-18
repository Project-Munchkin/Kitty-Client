import React, {Component} from "react";

class Step03 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={"step-box"}>
                    <div>
                        step 03
                    </div>
                </div>
                <div className={"step-buttons"}>
                    <span><a href="#">이전 단계로</a></span>
                    <span><a href="#">다음 단계로</a></span>
                </div>
                <hr className={"underline"}/>
            </div>
        )
    }
}

export default Step03;