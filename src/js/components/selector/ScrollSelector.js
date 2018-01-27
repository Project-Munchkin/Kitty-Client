import React, {Component} from 'react'

class ScrollSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div className="selector scroll">
                <span className="label">키</span>
                <div className="options">
                    <option>
                        170cm
                    </option>
                </div>
            </div>
        );
    }
}

export default ScrollSelector;