import * as ACTION_TYPES from './ActionTypes'

export function toggleGender (){
    return {
        type : ACTION_TYPES.TOGGLE_GENDER
    }
}

export function setBodyType (bodyType){
    return {
        type : ACTION_TYPES.SET_BODY_TYPE,
        bodyType
    }
}

export function setHeight (height){
    return {
        type : ACTION_TYPES.SET_BODY_HEIGHT,
        height
    }
}