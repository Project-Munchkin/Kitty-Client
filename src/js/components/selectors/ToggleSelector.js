import React, {Component} from "react";

class ToggleSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: this.props.initIndex
        };

        this.handleChangeOption = ::this.handleChangeOption;
    }

    handleChangeOption(e) {
        const target = e.target;
        const data = {};
        if (target.checked) {
            data.index = 0;
            data.value = this.props.options[0].value;
        } else {
            data.index = 1;
            data.value = this.props.options[1].value;
        }

        this.props.selectCallback && this.props.selectCallback(data);
    }

    render() {
        return (
            <div className={"selector toggle"}>
                <span className="label">{this.props.label}</span>
                <div className={"options"}>
                    <div className={"checkbox checkbox-slider checkbox-slider-lg"}>
                        <label>
                            <input type="checkbox" onChange={this.handleChangeOption}/><span/>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToggleSelector;