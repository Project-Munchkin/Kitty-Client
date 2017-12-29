import {combineReducers} from 'redux'
import user from './user'


// Reducer가 2개 이상일 경우 합쳐주는 함수
export default combineReducers({
    user
})