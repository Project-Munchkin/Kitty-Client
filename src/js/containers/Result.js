import React, {Component} from 'react'

import Header from "../components/header";

class Result extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="content">
                    <div className="content-explain">
                        <span>
                            어떤 브랜드를 둘러보실래요?
                        </span>
                    </div>
                    <div className="result">
                        <ul>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/uniqlo.gif"/>
                                </div>
                                <span className="label">유니클로</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/giordano.png"/>
                                </div>
                                <span className="label">지오다노</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/zara.png"/>
                                </div>
                                <span className="label">자라</span>
                            </li>
                            <li>
                                <div className="img-wrapper">
                                    <img src="../../img/hm.png"/>
                                </div>
                                <span className="label">H&M</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;