import React, {Component} from 'react'
import axios from "axios"
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
                    name: 'uniqlo',
                    image: '../img/brand/uniqlo.png'
                },
                {
                    name: 'giordano',
                    image: '../img/brand/giordano.png'
                },
                {
                    name: 'spao',
                    image: '../img/brand/spao.png'
                },
                {
                    name: 'h&m',
                    image: '../img/brand/h&m.png'
                }
            ],
            selectedIndex: TYPES.CONFIG.NOT_SELECTED
        };

        this.handleClickBrand = ::this.handleClickBrand;
        this.handleClickBottomButton = ::this.handleClickBottomButton;
    }

    handleClickBrand(brandName, index) {
        this.setState({
            selectedIndex: index
        });

        this.props.handleSetBrand(brandName);
    }

    handleClickBottomButton() {
        if (this.state.selectedIndex === TYPES.CONFIG.NOT_SELECTED) {
            alert("브랜드를 선택하세요!");
            return;
        }

        axios.post('/api/v1/result', this.props.data)
            .then((response) => {
                const result = response.data.result;
                this.props.handleSetResult(result);
                this.props.history.push('/result');
            })
            .catch((reason) => {
                console.log(reason);
                alert("오류가 발생했습니다.");
            });
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
                    <div className={`brand-explain ${this.state.selectedIndex === index ? "" : "hide"}`}>
                        <span className={"label label-en"}>
                            {item.name}
                        </span>
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
                    <div className={"bottom button"}
                        onClick={() => {this.handleClickBottomButton()}}>
                        <span className={"label"}>맞는 옷 찾으러 가기</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: Object.assign(state.app, state.user)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSetBrand: (brand) => {
            dispatch(actions.setBrand(brand));
        },
        handleSetResult: (result) => {
            dispatch(actions.setResult(result));
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Brand));
