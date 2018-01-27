import TYPES from '../../types'
import * as ACTION_TYPES from '../actions/ActionTypes'


const initialState = {
    gender: TYPES.USER.GENDER.MAN,
    bodyType: TYPES.USER.BODY_TYPE.NORMAL,
    height: 170,
    shoulder: TYPES.USER.SHOULDER.NORMAL,
    arm: TYPES.USER.ARM.NORMAL,
    leg: TYPES.USER.LEG.NORMAL
};

// Reducer는 이전 상태값과 액션을 전달받아서 내보낸다.
export default function user(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_GENDER:
            return {...state, gender: action.gender};
        case ACTION_TYPES.SET_BODY_TYPE:
            return {...state, bodyType: action.bodyType};
        case ACTION_TYPES.SET_BODY_HEIGHT:
            return {...state, height: action.height};
        case ACTION_TYPES.SET_SHOULDER:
            return {...state, shoulder: action.shoulder};
        case ACTION_TYPES.SET_ARM:
            return {...state, arm: action.arm};
        case ACTION_TYPES.SET_LEG:
            return {...state, leg: action.leg};
        default:
            return state;
    }
}