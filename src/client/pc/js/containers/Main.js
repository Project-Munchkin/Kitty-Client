import React, {Component} from "react";
import Navigator from "../components/navigator";
import Banner from "../components/banner";
import Step from "../components/step";

class Main extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Navigator/>
                <Banner/>
                <div className={"contents"}>
                    <Step index={1} description={"서비스 이용을 위해 간단한 신체 정보를 알려주세요 :)"} />
                    <Step index={2} description={"조금 더 정확한 피팅을 위해 자세하게 알려주세요!"} subDesc={"대략적인 자신의 신체비율을 고려해주세요"}/>
                    <Step index={3} description={"어떤 종류의 옷을 찾으시나요?"} subDesc={"찾으시는 옷의 종류를 선택해주세요:)"}/>
                    <Step index={4} description={"마지막 단계에요!\n" + "어떤 브랜드를 선호하시나요?"}/>
                </div>
            </div>
        );
    }
}

export default Main;