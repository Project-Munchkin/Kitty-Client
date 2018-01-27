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
        const name = target.getAttribute('data-index');

        this.setState({
            selectedIndex: index
        });

        this.props.selectCallback && this.props.selectCallback({index, name});
    }

    render() {
        const renderOptions = this.props.options.map((name, index)=>{
            return (<li className={this.state.selectedIndex === index ? 'active' : ''} key={index}
                        data-index={index} data-name={name} onClick={this.handleClickOption}>{name}</li>);
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