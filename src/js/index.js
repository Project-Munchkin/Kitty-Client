import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);