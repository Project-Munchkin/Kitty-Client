import React, {Component} from 'react'

import Header from "../components/header";
import BottomButton from "../components/buttons/BottomButton";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class RecommendedClothes extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: -1
        };

        this.handleClickRecommended = ::this.handleClickRecommended;
        this.handleClickButtonPrev = ::this.handleClickButtonPrev;
    }

    handleClickRecommended(index) {
        this.setState({
            selectedIndex: index
        });
    }

    handleClickButtonPrev() {
        this.props.history.push('/result');
    }

    render() {
        const recommendedIcons = this.props.product.map((item, index) => {
            return (
                <li key={index} onClick={()=> {this.handleClickRecommended(index)}}>
                    <div className={`clothes-summary ${this.state.selectedIndex === index ? "opacity" : ""}`}>
                        <div className={"img-wrapper"}>
                            <img src={`https://dpm-munchkin.herokuapp.com${item.appLogo}`}/>
                        </div>
                        <div className={"label-wrapper"}>
                            <span className={"label-en"}>{item.productName}</span>
                        </div>
                    </div>
                    <div className={`clothes-detail ${this.state.selectedIndex === index ? '' : "hide"}`}>
                        <div className={"detail-head"}>
                            <span className={"label-en"}>item.productName}</span>
                        </div>
                        <div className={"detail-body"}>
                            {item.detail === null ? "없음" : item.detail}
                        </div>
                    </div>
                </li>
            )
        });

        return (
            <div>
                <Header/>
                <div className={"content recommended"}>
                    <div className={"content-explain"}>
                        <span>
                            회원님과 비슷한 분들은 <br/>아래 옷들을 많이 찾았어요!
                        </span>
                    </div>
                    <div className={"recommended"}>
                        <ul>{recommendedIcons}</ul>
                    </div>
                    <BottomButton name={"<< 돌아가기"} onClickListener={this.handleClickButtonPrev} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.result.product
    }
};

export default withRouter(connect(mapStateToProps, undefined)(RecommendedClothes));