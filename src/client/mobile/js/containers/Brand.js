import React, {Component} from 'react'

import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions/index";

import TYPES from "../types";

class Brand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brandList: [
                {
                    name: '유니클로',
                    image: '../../img/brand/uniqlo.png'
                },
                {
                    name: '지오다노',
                    image: '../../img/brand/giordano.png'
                },
                {
                    name: 'spao',
                    image: '../../img/brand/spao.png'
                },
                {
                    name: 'H&M',
                    image: '../../img/brand/h&m.png'
                },
                {
                    name: 'ZARA',
                    image: '../../img/brand/zara.png'
                },
                {
                    name: 'ZARA2',
                    image: '../../img/brand/zara.png'
                }

            ],
            isMoving: false,
            selectedIndex: TYPES.CONFIG.NOT_SELECTED
        };

        this._timeout = null;
        this.handleClickBrand = ::this.handleClickBrand;
        this.handleScrollEvent = ::this.handleScrollEvent;
        this.handleClickRecommendedButton = ::this.handleClickRecommendedButton;
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScrollEvent);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScrollEvent);
    }

    handleClickBrand(brandName, index) {
        this.setState({
            selectedIndex: index
        });

        this.props.handleSetBrand(brandName);
    }

    handleScrollEvent() {
        if(this._timeout !== null) {
            clearTimeout(this._timeout);
        }

        this._timeout = setTimeout(() => {
            this._timeout = null;
            this.setState({
                isMoving: false
            });
        }, TYPES.CONFIG.SHOW_TIMEOUT);

        if(!this.state.isMoving) {
            this.setState({
                isMoving: true
            });
        }
    }

    handleClickRecommendedButton() {
        if (this.state.selectedIndex === TYPES.CONFIG.NOT_SELECTED) {
            alert("브랜드를 선택하세요!");
        } else {
            this.props.history.push('/result');
        }
    }

    render() {
        const brandIcons = this.state.brandList.map((item, index) => {
            return (
                <li key={index}
                    onClick={() => {this.handleClickBrand(item.name, index)}}
                    className={`${this.state.selectedIndex === index ? "active" : ""}`}>
                    <div className={"img-wrapper"}>
                        <img src={item.image}/>
                    </div>
                </li>
            )
        });

        return (
            <div>
                <Header/>
                <div className={"content brand"}>
                    <div className={"content-explain"}>
                        <span>
                            마지막 단계에요!<br/>어떤 브랜드를 선호하세요?
                        </span>
                    </div>
                    <div className={"brand-box brand"}>
                        <ul>
                            {brandIcons}
                        </ul>
                    </div>
                    <div className={`fix-button ${this.state.isMoving ? "hide" : ""}`}
                        onClick={() => {this.handleClickRecommendedButton()}}>
                        <span className={"label"}>맞는 옷 찾으러 가기</span>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleSetBrand: (brand) => {
            dispatch(actions.setBrand(brand));
        }
    }
};

export default withRouter(connect(undefined, mapDispatchToProps)(Brand));
