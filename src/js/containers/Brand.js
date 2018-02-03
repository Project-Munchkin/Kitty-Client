import React, {Component} from 'react'

import Header from "../components/header";

class Brand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brandList: [
                {
                    name: '유니클로',
                    image: '../../img/brand/uniqlo.png'
                },
                {
                    name: '지오다노',
                    image: '../../img/brand/giordano.png'
                },
                {
                    name: 'ZARA',
                    image: '../../img/brand/zara.jpg'
                },
                {
                    name: 'H&M',
                    image: '../../img/brand/hm.png'
                }
            ]
        };

        this.handleClickBrand = ::this.handleClickBrand;
    }

    handleClickBrand() {
        this.props.history.push('/clothes');
    }

    render() {
        const brandIcons = this.state.brandList.map((item, index) => {
            return (
                <li key={index} onClick={this.handleClickBrand}>
                    <div className="img-wrapper">
                        <img src={item.image}/>
                    </div>
                    <span className="label">{item.name}</span>
                </li>
            )
        });

        return (
            <div>
                <Header/>
                <div className="result-content">
                    <div className="content-explain">
                        <span>
                            어떤 브랜드를 둘러보실래요?
                        </span>
                    </div>
                    <div className="result">
                        <ul>
                            {brandIcons}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brand;