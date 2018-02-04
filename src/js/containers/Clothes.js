import React, {Component} from 'react'

import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Clothes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clothesList: [
                {
                    name: '상의',
                    image: '../../img/clothes/1.jpg'
                },
                {
                    name: '슬렉스',
                    image: '../../img/clothes/2.jpg'
                },
                {
                    name: '코트',
                    image: '../../img/clothes/3.jpg'
                },
                {
                    name: '상의',
                    image: '../../img/clothes/4.jpg'
                }

            ]
        };

        this.handleClickClothes = ::this.handleClickClothes
    }

    handleClickClothes(){

    }

    render() {

        const clothesIcons = this.state.clothesList.map((item, index) => {
            return (
                <li key={index}>
                    <div className={"img-wrapper"}>
                        <img src={item.image}/>
                    </div>
                    <div className={"label-wrapper"}>
                        <span>{item.name}</span>
                    </div>
                </li>)
        });

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
                </div>
            </div>
        );
    }
}


export default withRouter(connect(undefined, undefined)(Clothes));