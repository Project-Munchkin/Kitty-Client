import React, {Component} from 'react'
import TYPES from '../../types'

class LegSelect extends Component {

    constructor(props){
        super(props);

        this._handleLeg = this._handleLeg.bind(this);
    }

    _handleLeg(e) {
        this.props.onSelect(e.target.value);
    }

    _activeButtonStyle(leg) {
        return this._equalsLeg(leg) ? 'user-btn-active' : '';
    }

    _equalsLeg(leg) {
        return leg === this.props.value;
    }

    render() {
        return (
            <div className={'user-select'}>
                <span className={'user-label'}>다리</span>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.LEG.SHORT)}`}
                        onClick={this._handleLeg}
                        value={TYPES.USER.LEG.SHORT}>짧다</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.LEG.NORMAL)}`}
                        onClick={this._handleLeg}
                        value={TYPES.USER.LEG.NORMAL}>보통</button>
                <button type={'button'}
                        className={`user-btn ${this._activeButtonStyle(TYPES.USER.LEG.LONG)}`}
                        onClick={this._handleLeg}
                        value={TYPES.USER.LEG.LONG}>마름</button>
            </div>
        );
    }
}

export default LegSelect;