import React, {Component} from 'react'

import Header from "../components/header";

class RecommendedClothes extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="recommended-clothes-content">
                    <div className="recommended-clothes-content-explain">
                        <span>
                            회원님과 비슷한 분들은 <br/>아래 옷들을 많이 찾았어요!
                        </span>
                    </div>
                    <div className="recommended-clothes">
                        <ul>
                            <li>
                                <div className="clothes-summary">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/RedSweater.png"/>
                                    </div>
                                    <span className="label label-en">Red Sweater</span>
                                </div>
                            </li>
                            <li>
                                <div className="clothes-summary">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/GreySweaterWithLogo.png"/>
                                    </div>
                                    <span className="label label-en">Grey Sweater With Log</span>
                                </div>
                            </li>
                            <li>
                                <div className="clothes-summary">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/RedSweaterWithLogo.png"/>
                                    </div>
                                    <span className="label label-en">Red Sweater With Logo</span>
                                </div>
                            </li>
                            <li>
                                <div className="clothes-summary">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/WineVNeck.png"/>
                                    </div>
                                    <span className="label label-en">Wine V Neck</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecommendedClothes;