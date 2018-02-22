import React, {Component} from "react";

class Step04 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            brands : [
                { name: "유니클로", src: "../../img/mid/logo_uniq.png" },
                { name: "지오다노", src: "../../img/mid/logo_godn.png" },
                { name: "스파오", src: "../../img/mid/icon_spao.png" },
                { name: "에잇세컨즈", src: "../../img/mid/icon_zara.png" }
            ],
            selectedIndex: -1
        };

        this.handleClickBrand = ::this.handleClickBrand;
    }

    handleClickBrand(index) {
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        const renderOptions = this.state.brands.map((option, index) => {
            return (
                <li key={index} className={this.state.selectedIndex === index ? "active" : ""}
                    onClick={() => {this.handleClickBrand(index)}}
                >
                    <div className={`brand ${this.state.selectedIndex === index ? "check" : "summary"}`}>
                        <div className={"img-wrapper"}>
                            <img src={option.src}/>
                        </div>
                        <span className={"checkmark"}/>
                    </div>
                    <div className={"labels"}>
                        <span className={"label"}>{option.name}</span>
                    </div>
                </li>
            )
        });

        return (
            <div>
                <div className={"step04"}>
                    <div className={"image-selector"}>
                        <div className={"options"}>
                            <ul>
                                {renderOptions}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"step-buttons"}>
                    <span><a href="#">이전 단계로</a></span>
                </div>
            </div>
        )
    }
}
// 779
export default Step04;