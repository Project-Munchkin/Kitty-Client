import React, {Component} from 'react'
import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions";

class Result extends Component {

    constructor(props){
        super(props);
        console.log(this.props.app);
        console.log(this.props.user);
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    {JSON.stringify(this.props.app)}
                    {JSON.stringify(this.props.user)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        user: state.user
    }
};


export default withRouter(connect(mapStateToProps, undefined)(Result));