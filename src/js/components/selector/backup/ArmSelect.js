import React, {Component} from 'react'
import TYPES from '../../../types'

class ArmSelect extends Component {

    constructor(props){
        super(props);

        this._handleArm = this._handleArm.bind(this);
    }

    _handleArm(e) {
        this.props.onSelect(e.target.value);
    }

    _activeButtonStyle(arm) {
        return this._equalsArm(arm) ? 'user-btn-active' : '';
    }

    _equalsArm(arm) {
        return arm === this.props.value;
    }

    render() {
        return (
            <div className={'user-select'}>
                <span className={'user-label'}>팔</span>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.ARM.SHORT)}`}
                        onClick={this._handleArm}
                        value={TYPES.USER.ARM.SHORT}>짧다</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.ARM.NORMAL)}`}
                        onClick={this._handleArm}
                        value={TYPES.USER.ARM.NORMAL}>보통</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.ARM.LONG)}`}
                        onClick={this._handleArm}
                        value={TYPES.USER.ARM.LONG}>마름</button>
            </div>
        );
    }
}

export default ArmSelect;