import TYPES from '../../types'
import * as ACTION_TYPES from '../actions/ActionTypes'


const initialState = {
    gender: TYPES.USER.GENDER.MAN,
    bodyType: TYPES.USER.BODY_TYPE.NORMAL,
    height: 170
};

// Reducer는 이전 상태값과 액션을 전달받아서 내보낸다.
export default function user(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_GENDER:
            return {};
        case ACTION_TYPES.SET_BODY_TYPE:
            return {...state, bodyType: action.bodyType};
        case ACTION_TYPES.SET_BODY_HEIGHT:
            return {...state, height: action.height}
    }
}