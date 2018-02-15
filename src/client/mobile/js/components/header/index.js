import React, {Component} from 'react'

class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="header-box">
                <p>MUCH<span className="header-title-acent">FIT</span></p>
            </div>
        );
    }
}

export default Header;

