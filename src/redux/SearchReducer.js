import { SEARCH_PRODUCTS, SEND_SEARCH_KEY } from "./ActionTypes"

const initialState = {
    searchProducts: [],
    searchKey: null,
}

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchProducts: [...action.payload]
            }
        case SEND_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload,
            }
        default:
            return state;
    }
}

export default SearchReducer