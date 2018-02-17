import React, {Component} from "react";
import Navigator from "../components/navigator";
import Banner from "../components/banner";

class Main extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Navigator/>
                <Banner/>
            </div>
        );
    }
}

export default Main;