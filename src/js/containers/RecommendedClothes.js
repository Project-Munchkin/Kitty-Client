import React, {Component} from 'react'

import Header from "../components/header";
import BottomButton from "../components/buttons/BottomButton";

class RecommendedClothes extends Component {

    constructor(props){
        super(props);
        this.state = {
            recommendedList: [
                {
                    name: 'Red Sweater',
                    image: '../../img/recommendedclothes/RedSweater.png',
                    detail: {
                        contents: '품에 같이, 이상을 청춘에서만 투명하되 유소년에게서 그들에게 그와 것이다. 품으며, 예수는 충분히 못할 하였으며, 싶이 그들의 현저하게 부패뿐이다. 꽃 구할 인생을 튼튼하며, 때까지 이 뿐이다. 뜨고, 원대하고, 사라지지 청춘을 얼음이 피다. 살았으며, 우리 이상, 풀밭에 위하여 약동하다.'
                    }
                },
                {
                    name: 'Grey Sweater With Log',
                    image: '../../img/recommendedclothes/GreySweaterWithLogo.png',
                    detail: {
                        contents: '품에 같이, 이상을 청춘에서만 투명하되 유소년에게서 그들에게 그와 것이다. 품으며, 예수는 충분히 못할 하였으며, 싶이 그들의 현저하게 부패뿐이다. 꽃 구할 인생을 튼튼하며, 때까지 이 뿐이다. 뜨고, 원대하고, 사라지지 청춘을 얼음이 피다. 살았으며, 우리 이상, 풀밭에 위하여 약동하다.'
                    }
                },
                {
                    name: 'Red Sweater With Logo',
                    image: '../../img/recommendedclothes/RedSweaterWithLogo.png',
                    detail: {
                        contents: '품에 같이, 이상을 청춘에서만 투명하되 유소년에게서 그들에게 그와 것이다. 품으며, 예수는 충분히 못할 하였으며, 싶이 그들의 현저하게 부패뿐이다. 꽃 구할 인생을 튼튼하며, 때까지 이 뿐이다. 뜨고, 원대하고, 사라지지 청춘을 얼음이 피다. 살았으며, 우리 이상, 풀밭에 위하여 약동하다.'
                    }
                },
                {
                    name: 'Wine V Neck',
                    image: '../../img/recommendedclothes/WineVNeck.png',
                    detail: {
                        contents: '품에 같이, 이상을 청춘에서만 투명하되 유소년에게서 그들에게 그와 것이다. 품으며, 예수는 충분히 못할 하였으며, 싶이 그들의 현저하게 부패뿐이다. 꽃 구할 인생을 튼튼하며, 때까지 이 뿐이다. 뜨고, 원대하고, 사라지지 청춘을 얼음이 피다. 살았으며, 우리 이상, 풀밭에 위하여 약동하다.'
                    }
                }
            ],
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
        const recommendedIcons = this.state.recommendedList.map((item, index) => {
            return (
                <li key={index} onClick={()=> {this.handleClickRecommended(index)}}>
                    <div className={`clothes-summary ${this.state.selectedIndex === index ? "opacity" : ""}`}>
                        <div className={"img-wrapper"}>
                            <img src={item.image}/>
                        </div>
                        <div className={"label-wrapper"}>
                            <span className={"label-en"}>{item.name}</span>
                        </div>
                    </div>
                    <div className={`clothes-detail ${this.state.selectedIndex === index ? '' : "hide"}`}>
                        <div className={"detail-head"}>
                            <span className={"label-en"}>{item.name}</span>
                        </div>
                        <div className={"detail-body"}>
                            {item.detail.contents}
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

export default RecommendedClothes;