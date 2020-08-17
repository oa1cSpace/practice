import {combineReducers} from "redux";
import {rowsReducer} from "./rowsReducer";
import {loginReducer} from "./loginReducer";


export const rootReducers = combineReducers({
    rows: rowsReducer,
    login: loginReducer
});

