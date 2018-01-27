import React, {Component} from 'react'
import TYPES from '../../types'

class BodyTypeSelect extends Component {

    constructor(props){
        super(props);

        this._handleBodyType = this._handleBodyType.bind(this);
    }

    _handleBodyType(e) {
        this.props.onSelect(e.target.value);
    }

    _activeButtonStyle(bodyType) {
        return this._equalsBodyType(bodyType) ? 'user-btn-active' : '';
    }

    _equalsBodyType(bodyType) {
        return bodyType === this.props.value;
    }

    render() {
        return (
            <div className={'user-select'}>
                <span className={'user-label'}>체형</span>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.BODY_TYPE.CHUBBY)}`}
                        onClick={this._handleBodyType}
                        value={TYPES.USER.BODY_TYPE.CHUBBY}>뚱뚱</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.BODY_TYPE.NORMAL)}`}
                        onClick={this._handleBodyType}
                        value={TYPES.USER.BODY_TYPE.NORMAL}>보통</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.BODY_TYPE.SLIM)}`}
                        onClick={this._handleBodyType}
                        value={TYPES.USER.BODY_TYPE.SLIM}>마름</button>
            </div>
        );
    }
}

export default BodyTypeSelect;