import * as ACTION_TYPES from './ActionTypes'

export function setGender(gender) {
    return {
        type: ACTION_TYPES.SET_GENDER,
        gender
    }
}

export function setBodyType(bodyType) {
    return {
        type: ACTION_TYPES.SET_BODY_TYPE,
        bodyType
    }
}

export function setHeight(height) {
    return {
        type: ACTION_TYPES.SET_BODY_HEIGHT,
        height
    }
}

export function setShoulder(shoulder) {
    return {
        type: ACTION_TYPES.SET_SHOULDER,
        shoulder
    }
}

export function setArm(arm) {
    return {
        type: ACTION_TYPES.SET_ARM,
        arm
    }
}

export function setLeg(leg) {
    return {
        type: ACTION_TYPES.SET_LEG,
        leg
    }
}

export function setBrand(brand) {
    return {
        type: ACTION_TYPES.SET_BRAND,
        brand
    }
}

export function setClothesType(clothesType) {
    return {
        type: ACTION_TYPES.SET_CLOTHES_TYPE,
        clothesType
    }
}

export function setInitialState() {
    return {
        type: ACTION_TYPES.SET_INITIAL
    }
}

export function setResult(result) {
    return {
        type: ACTION_TYPES.SET_RESULT,
        result
    }
}