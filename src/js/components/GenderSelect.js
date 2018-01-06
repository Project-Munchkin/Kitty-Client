import React, {Component} from 'react'
import TYPES from "../types";

class GenderSelect extends Component {

    constructor(props){
        super(props);

        this._handleGender = this._handleGender.bind(this);
    }

    _handleGender(e) {
        this.props.onSelect(e.target.value);
    }

    render() {
        return (
            <div className={'user-select'}>
                <span className={'user-label'}>성별</span>
                <select value={this.props.value} onChange={this._handleGender}>
                    <option value={TYPES.USER.GENDER.MAN}>남</option>
                    <option value={TYPES.USER.GENDER.WOMAN}>여</option>
                </select>
            </div>
        );
    }
}

export default GenderSelect;