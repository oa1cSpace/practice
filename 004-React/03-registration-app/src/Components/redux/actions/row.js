import * as action from '../constants/constants'

export const generateData = (data) => {
    return {
        type: action.GENERATE_DATA,
        data
    }
};

export const updateFilteredRows = (data) => {
    return {
        type: action.UPDATE_FILTERED_ROWS,
        data
    }
};

export const updatePage = (page) => {
    return {
        type: action.UPDATE_PAGE,
        page
    }
};

