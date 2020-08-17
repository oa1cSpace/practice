import {GENERATE_DATA, UPDATE_FILTERED_ROWS, UPDATE_PAGE} from '../constants/constants';

const initialState = {
    rowsInitial: [],
    rowsPerPage: 20,
    rowsFiltered: [],
    currentPage: 1,
};

export const rowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_DATA:
            return {...state, rowsInitial: [...action.data], rowsFiltered: [...action.data]};
        case UPDATE_FILTERED_ROWS:
            return {...state, rowsFiltered: [...action.data]};
        case UPDATE_PAGE:
            return {...state, currentPage: action.page};
        default:
            return state;
    }
};
