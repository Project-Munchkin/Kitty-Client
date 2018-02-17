import React, {Component} from 'react'

class Navigator extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={"topNav"}>
                <a href="#"><img className={"logo"} src={"../img/top/top_logo.png"} /></a>
                <nav>
                    <ul>
                        <li><a href="#" className={"selected"}>회원가입</a></li>
                        <li><a href="#">로그인</a></li>
                        <li><a href="#">서비스소개</a></li>
                        <li><a href="#">이용가이드</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigator;

