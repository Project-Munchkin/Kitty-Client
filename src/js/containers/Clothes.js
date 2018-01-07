import React, {Component} from 'react'

import Header from "../components/header";

class Clothes extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="content clothes-content">
                    <div className="content-explain clothes-content-explain">
                        <span>
                            어떤 옷을 찾으세요?
                        </span>
                    </div>
                    <div className="clothes">
                        <ul>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/champion.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/champion.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/champion.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/champion.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/champion.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/clothes/champion.jpg"/>
                                </div>
                                <span className="label">상의</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clothes;