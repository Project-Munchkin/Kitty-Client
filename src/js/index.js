import React from 'react'
import ReactDom from 'react-dom'

// router
import { HashRouter } from 'react-router-dom';

// redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './store/reducers'

const store = createStore(reducers);

// app
import App from './containers/App'

ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);