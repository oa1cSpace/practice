import {
    CLEAR_FORM,
    SET_ERRORS,
    SET_FIELD,
    SET_LOGGED_IN,
} from '../constants/constants';
const initialState = {
    fields: {},
    errors: {},
    isLogged: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS:
            return { ...state, errors: action.errors};
        case SET_FIELD:
            return { ...state, fields: {...state.fields, [action.field.name]: action.field.value } };
        case SET_LOGGED_IN:
            return { ...state, fields: action.fields, isLogged: action.isLogged, errors: {} };
        case CLEAR_FORM:
            return { ...state, fields: action.fields };
        default:
            return state;
    }
};
