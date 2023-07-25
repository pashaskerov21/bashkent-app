import { SEARCH_PRODUCTS, SEND_SEARCH_KEY } from "./ActionTypes"

export const sendSearchProducts = (products) => {
    return{
        type: SEARCH_PRODUCTS,
        payload: products,
    }
}
export const sendSearchKey = (searchKey) => {
    return{
        type: SEND_SEARCH_KEY,
        action: searchKey,
    }
}