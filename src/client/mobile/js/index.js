import React from 'react'
import ReactDom from 'react-dom'

// router
import { HashRouter } from 'react-router-dom';

// redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './store/reducers'
import loggerMiddleware from './middleware/logger'

const store = createStore(reducers, applyMiddleware(loggerMiddleware));

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