import React, {Component} from 'react'

class HeightSelect extends Component {

    constructor(props){
        super(props);

        this._handleHeight = this._handleHeight.bind(this);
    }

    _handleHeight(e) {
        this.props.onSelect(e.target.value);
    }

    render() {
        let heightArray = [];
        for (let i = this.props.startValue; i <= this.props.endValue; i++) {
            heightArray.push(i);
        }

        return (
            <div className={'user-select'}>
                <span className={'user-label'}>키</span>
                <select value={this.props.value} onChange={this._handleHeight}>
                    {
                        heightArray.map((height, i) => {
                            return <option value={height} key={i}>{height}</option>
                        })
                    }
                </select>
            </div>
        );
    }
}

export default HeightSelect;