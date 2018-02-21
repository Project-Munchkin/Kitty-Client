import React, {Component} from "react";
import types from "../../types";

class Step03 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clothes: [
                {
                    gender: types.USER.GENDER.MAN,
                    options: [
                        {name: '자켓/코트', nameEn: 'Jaket/Coat', src: '../../img/mid/icon_menjk.png'},
                        {name: '맨투맨/티셔츠', nameEn: 'MenToMen/T-Shirt', src: '../../img/mid/icon_menmtm.png'},
                        {name: '셔츠', nameEn: 'Shirt', src: '../../img/mid/icon_menshirt.png'},
                        {name: '청바지/슬랙스', nameEn: 'Pants', src: '../../img/mid/icon_menpants.png'}
                    ],
                    selectedIndex: -1
                },
                {
                    gender: types.USER.GENDER.WOMAN,
                    options: [
                        {name: '아우터', nameEn: 'Outwear', src: '../../img/mid/icon_wjk.png'},
                        {name: '원피스', nameEn: 'Onepiece', src: '../../img/mid/icon_wonepiece.png'},
                        {name: '상의', nameEn: 'Top', src: '../../img/mid/icon_wtop.png'},
                        {name: '치마/바지', nameEn: 'Pants', src: '../../img/mid/icon_wpants.png'}
                    ],
                    selectedIndex: -1
                }
            ]
        };

        this.handleClickClothes = ::this.handleClickClothes;
    }

    handleClickClothes(index, gender) {
        const modifiedClothes = [];

        this.state.clothes.forEach((value) => {
            if (value.gender === gender) {
                modifiedClothes.push({
                    gender: value.gender,
                    options: value.options,
                    selectedIndex: index
                });
            } else {
                modifiedClothes.push(value)
            }
        });

        this.setState({
            clothes: modifiedClothes
        });
    }

    _renderClothesOptionsByGender(gender) {
        const clothesByGender = this.state.clothes.filter((value) => value.gender === gender)[0];
        return clothesByGender.options
            .map((option, index) => {
                return (
                    <li className={clothesByGender.selectedIndex === index ? "active" : ""} key={index} onClick={() => {
                        this.handleClickClothes(index, gender)
                    }}>
                        <div className={"clothes summary"}>
                            <div className={"img-wrapper"}>
                                <img src={option.src}/>
                            </div>
                            <div className={"label-box"}>
                                <span className={"label"}>{option.name}</span>
                                <span className={"label label-en"}>{option.nameEn}</span>
                            </div>
                        </div>
                        <div className={`clothes check ${clothesByGender.selectedIndex === index ? "" : "hide"}`}>
                            <div>
                                <span className={"checkmark"}/>
                            </div>
                            <div>
                                <span className={"label"}>{option.name}</span>
                            </div>
                        </div>
                    </li>)
            });
    }

    render() {
        return (
            <div>
                <div className={"step03"}>
                    <div className={"image-selector"}>
                        <div className={"label-box"}>
                            <span className={"label"}>남성</span>
                            <span className={"label-en"}>Men</span>
                        </div>
                        <div className={"options"}>
                            <ul>
                                {this._renderClothesOptionsByGender(types.USER.GENDER.MAN)}
                            </ul>
                        </div>
                    </div>
                    <div className={"image-selector"}>
                        <div className={"label-box"}>
                            <span className={"label"}>여성</span>
                            <span className={"label-en"}>Women</span>
                        </div>
                        <div className={"options"}>
                            <ul>
                                {this._renderClothesOptionsByGender(types.USER.GENDER.WOMAN)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"step-buttons"}>
                    <span><a href="#">이전 단계로</a></span>
                    <span><a href="#">다음 단계로</a></span>
                </div>
                <hr className={"underline"}/>
            </div>
        )
    }
}

export default Step03;