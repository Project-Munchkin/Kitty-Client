import React, {Component} from 'react'

import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Clothes extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="clothes-content">
                    <div className="clothes-content-explain">
                        <span>
                            어떤 옷을 찾으세요?
                        </span>
                    </div>
                    <div className="clothes">
                        <ul>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/1.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/2.jpg"/>
                                </div>
                                <span className="label">슬랙스</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/3.jpg"/>
                                </div>
                                <span className="label">코트</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/4.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/5.jpg"/>
                                </div>
                                <span className="label">하의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/6.jpg"/>
                                </div>
                                <span className="label">외투</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(connect(undefined, undefined)(Clothes));