import React, {Component} from "react";
import { Route } from "react-router-dom";

import Main from "./Main";

class App extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={'container'}>
                <Route exact path="/" component={Main}/>
            </div>
        );
    }
}

export default App;