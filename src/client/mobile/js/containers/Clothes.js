import React, {Component} from 'react'

import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions";
import types from "../../../pc/js/types";
import BottomButton from "../components/buttons/BottomButton";
import TYPES from "../types";

class Clothes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clothes: [
                {
                    gender: types.USER.GENDER.MAN,
                    options: [
                        {name: '자켓/코트', nameEn: 'Jaket/Coat', src: '../img/clothes/icon_menjk.png'},
                        {name: '맨투맨/티셔츠', nameEn: 'MenToMen/T-Shirt', src: '../img/clothes/icon_menmtm.png'},
                        {name: '셔츠', nameEn: 'Shirt', src: '../img/clothes/icon_menshirt.png'},
                        {name: '청바지/슬랙스', nameEn: 'Pants', src: '../img/clothes/icon_menpants.png'}
                    ]
                },
                {
                    gender: types.USER.GENDER.WOMAN,
                    options: [
                        {name: '아우터', nameEn: 'Outwear', src: '../img/clothes/icon_wjk.png'},
                        {name: '원피스', nameEn: 'Onepiece', src: '../img/clothes/icon_wonepiece.png'},
                        {name: '상의', nameEn: 'Top', src: '../img/clothes/icon_wtop.png'},
                        {name: '치마/바지', nameEn: 'Pants', src: '../img/clothes/icon_wpants.png'}
                    ]
                }
            ],
            selectedIndex: -1
        };

        this.handleClickClothes = ::this.handleClickClothes;
        this.handleClickButtonNext = ::this.handleClickButtonNext;
    }

    handleClickClothes(clothesType, index) {
        this.setState({
            selectedIndex: index
        });

        this.props.handleSetClothesType(clothesType);
    }

    handleClickButtonNext() {
        if (this.state.selectedIndex === TYPES.CONFIG.NOT_SELECTED) {
            alert("종류를 선택하세요!");
            return;
        }

        this.props.history.push('/brand');
    }

    _renderClothesOptionsByGender(gender) {
        const clothesByGender = this.state.clothes.filter((value) => value.gender === gender)[0];
        return clothesByGender.options
            .map((option, index) => {
                return (
                    <li key={index} className={`${this.state.selectedIndex === index ? "active" : ""}`}
                        onClick={() => {
                            this.handleClickClothes(option.name, index)
                        }}>
                        <div className={"summary"}>
                            <div className={"img-wrapper"}>
                                <img src={option.src}/>
                            </div>
                            <div className={"label-wrapper"}>
                                <span className={"label"}>{option.name}</span>
                                <span className={"label-en"}>{option.nameEn}</span>
                            </div>
                        </div>
                    </li>)
            });
    }

    render() {

        const clothesIcons = this._renderClothesOptionsByGender(this.props.gender);

        return (
            <div>
                <Header/>
                <div className={"content clothes"}>
                    <div className={"content-explain"}>
                        <span>
                            어떤 옷을 찾으세요?
                        </span>
                    </div>
                    <div className={"clothes"}>
                        <ul>{clothesIcons}</ul>
                    </div>
                    <BottomButton name={'다음으로 >>'} onClickListener={this.handleClickButtonNext}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gender: state.user.gender
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSetClothesType: (clothesType) => {
            dispatch(actions.setClothesType(clothesType));
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Clothes));