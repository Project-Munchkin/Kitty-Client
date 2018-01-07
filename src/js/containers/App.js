import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import User from './User'
import Select from './Select'
import Result from './Result'
import Clothes from "./Clothes";

class App extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={'container'}>
                <Route exact path="/" component={User}/>
                <Route path="/user" component={User}/>
                <Route path="/select" component={Select}/>
                <Route path="/result" component={Result}/>
                <Route path="/clothes" component={Clothes}/>
            </div>
        );
    }
}

export default App;