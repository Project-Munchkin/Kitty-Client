import React, {Component} from "react";

class Step04 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={"step-box"}>
                    <div>
                        step 04
                    </div>
                </div>
                <div className={"step-buttons"}>
                    <span><a href="#">이전 단계로</a></span>
                </div>
            </div>
        )
    }
}

export default Step04;