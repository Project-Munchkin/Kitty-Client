import React, {Component} from 'react'

import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions/index";

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
                    name: 'ZARA',
                    image: '../../img/brand/zara.jpg'
                },
                {
                    name: 'H&M',
                    image: '../../img/brand/hm.png'
                }
            ],
            isMoving: false,
            selectedIndex: -1
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

        const SHOW_TIMEOUT = 100;

        this._timeout = setTimeout(() => {
            this._timeout = null;
            this.setState({
                isMoving: false
            });
        }, SHOW_TIMEOUT);

        if(!this.state.isMoving) {
            this.setState({
                isMoving: true
            });
        }
    }

    handleClickRecommendedButton() {
        this.props.history.push('/recommended');
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
                    <div className={`recommended-button ${this.state.isMoving === true ? "hide" : ""}`}
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
