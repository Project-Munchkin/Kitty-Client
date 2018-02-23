import {combineReducers} from 'redux'

import app from './app'
import user from './user'
import result from './result'


// Reducer가 2개 이상일 경우 합쳐주는 함수
export default combineReducers({
    app,
    user,
    result
})