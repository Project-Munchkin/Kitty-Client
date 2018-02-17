import React, {Component} from 'react'

class ScrollSelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selector scroll">
                <span className="label">키</span>
                <div className="options">
                    <input type="number" value={this.props.height} onChange={(e)=>{this.props.onChangeHeight(e.target.value)}}/> <span>cm</span>
                </div>
            </div>
        );
    }
}

export default ScrollSelector;