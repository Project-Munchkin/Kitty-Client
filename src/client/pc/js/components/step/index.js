import React, {Component} from "react";

import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";

class Step extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const selector = () => {
            switch (this.props.index){
                case 1: return <Step01/>;
                case 2: return <Step02/>;
                case 3: return <Step03/>;
                case 4: return <Step04/>;
            }
        };

        return (
            <div className={"step"}>
                <div className={"title-box"}>
                    <div className={"title"}><span>STEP {this.props.index}</span></div>
                    <div className={"description"}><span>{this.props.description}</span></div>
                    { !!this.props.subDesc &&
                      <div className={"sub-desc"}><span>{this.props.subDesc}</span></div>
                    }
                </div>
                <div className={"selectors"}>
                    {selector()}
                </div>
            </div>
        )
    }
}

export default Step;