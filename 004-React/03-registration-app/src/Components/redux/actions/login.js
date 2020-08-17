import * as action from '../constants/constants'

export const setErrors = (errors) => {
    return {
        type: action.SET_ERRORS,
        errors
    }
};

export const setField = (field) => {
    return {
        type: action.SET_FIELD,
        field
    }
};

export const setLoggedIn = (fields) => {
    return {
        type: action.SET_LOGGED_IN,
        isLogged: true,
        fields
    }
};

export const clearForm = (fields) => {
    return {
        type: action.CLEAR_FORM,
        fields
    }
};
