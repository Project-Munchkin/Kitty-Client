import React, {Component} from 'react'

class ButtonSelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: this.props.initIndex
        };

        this.handleClickOption = ::this.handleClickOption;
    }

    handleClickOption(e){
        const target = e.target;
        const index = Number(target.getAttribute('data-index'));
        const value = target.getAttribute('data-value');

        this.setState({
            selectedIndex: index
        });

        this.props.selectCallback && this.props.selectCallback({index, value});
    }

    render() {
        const renderOptions = this.props.options.map((item, index)=>{
            return (<li className={this.state.selectedIndex === index ? 'active' : ''} key={index}
                        data-index={index} data-value={item.value} onClick={this.handleClickOption}>{item.name}</li>);
        });

        return (
            <div className={"selector button"}>
                <span className={"label"}>{this.props.label}</span>
                <div className={"options"}>
                    <ul>
                        {/* [D] 선택된 것은 active 클래스 */}
                        {renderOptions}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ButtonSelector;