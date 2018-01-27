import React, {Component} from 'react'

class ButtonSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    render() {
        return (
            <div className={"selector button"}>
                <span className={"label"}>체형</span>
                <div className={"options"}>
                    <ul>
                        {  /* [D] 선택된 것은 active 클래스 */}
                        <li className={"active"}>통통</li>
                        <li>보통</li>
                        <li>마름</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ButtonSelector;