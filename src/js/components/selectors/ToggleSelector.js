import React, {Component} from "react";

class ToggleSelector extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="selector toggle">
                <span className="label">성별</span>
                <div className="options">
                    <checkbox>남</checkbox>
                </div>
            </div>
        );
    }
}

export default ToggleSelector;