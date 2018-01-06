import * as ACTION_TYPES from './ActionTypes'

export function toggleGender (gender){
    return {
        type : ACTION_TYPES.TOGGLE_GENDER,
        gender
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

export function setShoulder (shoulder){
    return {
        type : ACTION_TYPES.SET_SHOULDER,
        shoulder
    }
}

export function setArm (arm){
    return {
        type : ACTION_TYPES.SET_ARM,
        arm
    }
}

export function setLeg (leg){
    return {
        type : ACTION_TYPES.SET_LEG,
        leg
    }
}