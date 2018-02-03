import TYPES from '../../types'
import * as ACTION_TYPES from '../actions/ActionTypes'


const initialState = {
    brand: null,
    clothesType: null
};

// Reducer는 이전 상태값과 액션을 전달받아서 내보낸다.
export default function user(state = initialState, action) {
    switch (action.type){
        case ACTION_TYPES.SET_BRAND:
            return {...state, brand: action.brand};
        case ACTION_TYPES.SET_CLOTHES_TYPE:
            return {...state, clothesType: action.clothesType};
        default:
            return state;
    }
}