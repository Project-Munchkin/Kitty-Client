import React, {Component} from 'react'

import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions";

class Clothes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clothesList: [
                {
                    type: '상의',
                    image: '../../img/clothes/1.jpg'
                },
                {
                    type: '슬렉스',
                    image: '../../img/clothes/2.jpg'
                },
                {
                    type: '코트',
                    image: '../../img/clothes/3.jpg'
                },
                {
                    type: '상의',
                    image: '../../img/clothes/4.jpg'
                }

            ]
        };

        this.handleClickClothes = ::this.handleClickClothes;
    }

    handleClickClothes(clothesType){
        this.props.handleSetClothesType(clothesType);
        this.props.history.push('/result');
    }

    render() {

        const clothesIcons = this.state.clothesList.map((item, index) => {
            return (
                <li key={index} onClick={()=>{this.handleClickClothes(item.type)}}>
                    <div className={"img-wrapper"}>
                        <img src={item.image}/>
                    </div>
                    <div className={"label-wrapper"}>
                        <span>{item.type}</span>
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleSetClothesType: (clothesType) => {
            dispatch(actions.setClothesType(clothesType));
        }
    }
};


export default withRouter(connect(undefined, mapDispatchToProps)(Clothes));