import React, {Component} from 'react'
import TYPES from '../../../types'

class ShoulderSelect extends Component {

    constructor(props){
        super(props);

        this._handleShoulder = this._handleShoulder.bind(this);
    }

    _handleShoulder(e) {
        this.props.onSelect(e.target.value);
    }

    _activeButtonStyle(shoulder) {
        return this._equalsShoulder(shoulder) ? 'user-btn-active' : '';
    }

    _equalsShoulder(shoulder) {
        return shoulder === this.props.value;
    }

    render() {
        return (
            <div className={'user-select'}>
                <span className={'user-label'}>어깨</span>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.SHOULDER.NARROW)}`}
                        onClick={this._handleShoulder}
                        value={TYPES.USER.SHOULDER.NARROW}>좁다</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.SHOULDER.NORMAL)}`}
                        onClick={this._handleShoulder}
                        value={TYPES.USER.SHOULDER.NORMAL}>보통</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.SHOULDER.WIDE)}`}
                        onClick={this._handleShoulder}
                        value={TYPES.USER.SHOULDER.WIDE}>넓다</button>
            </div>
        );
    }
}

export default ShoulderSelect;