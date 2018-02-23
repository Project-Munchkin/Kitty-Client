import * as ACTION_TYPES from '../actions/ActionTypes'


const initialState = {
    size: null,
    product: null
};

// Reducer는 이전 상태값과 액션을 전달받아서 내보낸다.
export default function result(state = initialState, action) {
    switch (action.type){
        case ACTION_TYPES.SET_RESULT:
            return { ...state, size: action.result.size, product: action.result.productInfo };
        default:
            return state;
    }
}