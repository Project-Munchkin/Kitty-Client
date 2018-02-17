import React, {Component} from 'react'

class Banner extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className={"banner"}>
                <div className={"banner-text"}>
                    <span className={"catch"}>FIND A FIT FOR YOU</span>
                    <br/>
                    <span className={"description"}>머치핏이 자신에게 딱 알맞는 사이즈의 옷을 찾아드립니다.</span>
                </div>
            </header>
        );
    }
}

export default Banner;

