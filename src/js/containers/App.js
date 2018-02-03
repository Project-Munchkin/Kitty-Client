import React, {Component} from "react";
import { Route } from "react-router-dom";

import User from "./User";
import Brand from "./Brand";
import Clothes from "./Clothes";
import Result from "./Result";
import RecommendedClothes from "./RecommendedClothes";
import RecommendedClothesDetail from "./RecommendedClothesDetail";

class App extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={'container'}>
                <Route exact path="/" component={User}/>
                <Route path="/user" component={User}/>
                <Route path="/brand" component={Brand}/>
                <Route path="/clothes" component={Clothes}/>
                <Route path="/result" component={Result}/>
                <Route path="/recommended" component={RecommendedClothes}/>
            </div>
        );
    }
}

export default App;