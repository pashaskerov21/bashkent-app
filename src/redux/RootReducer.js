import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";

const rootReducer = combineReducers({
    searchState: SearchReducer,
})

export default rootReducer;