import React, {Component} from 'react'

import Header from "../components/header";

class RecommendedClothesDetail extends Component {

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
                                <div className="clothes-summary opacity">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/RedSweater.png"/>
                                    </div>
                                    <span className="label label-en">Red Sweater</span>
                                </div>
                                <div className="clothes-detail">
                                    <div className="detail-head">
                                        <span className="label label-en">Red Sweater</span>
                                    </div>
                                    <div className="detail-body">
                                        품에 같이, 이상을 청춘에서만 투명하되 유소년에게서 그들에게 그와 것이다. 품으며, 예수는 충분히 못할 하였으며, 싶이 그들의 현저하게 부패뿐이다. 꽃 구할 인생을 튼튼하며, 때까지 이 뿐이다. 뜨고, 원대하고, 사라지지 청춘을 얼음이 피다. 살았으며, 우리 이상, 풀밭에 위하여 약동하다.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="clothes-summary opacity">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/GreySweaterWithLogo.png"/>
                                    </div>
                                    <span className="label label-en">Grey Sweater With Log</span>
                                </div>
                            </li>
                            <li>
                                <div className="clothes-summary opacity">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/RedSweaterWithLogo.png"/>
                                    </div>
                                    <span className="label label-en">Red Sweater With Logo</span>
                                </div>
                            </li>
                            <li>
                                <div className="clothes-summary opacity">
                                    <div className="img-wrapper">
                                        <img src="../../img/recommendedclothes/WineVNeck.png"/>
                                    </div>
                                    <span className="label label-en">Wine V Neck</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="button-prev">
                        <a>《돌아가기</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecommendedClothesDetail;