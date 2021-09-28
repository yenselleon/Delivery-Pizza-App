import { types } from "../types";


const UiItemsContextReducer = (state , action) => {
    const {type, payload} = action;

    switch (type) {
        case types.getDataItems:
            return {
                ...state,
                [payload.pushArrayState]: payload.data,
            }
            
        case types.getItemMenyById:
            return {
                ...state,
                selectedItem: payload,
            }

        case types.pushItemToShoppingCart:
            return {
                ...state,
                itemsShoppingCart: [
                    ...state.itemsShoppingCart,
                    payload
                ],
            }

        case types.addTotalPriceAndItemsOnCart:
            return {
                ...state,
                totalPriceAndItemsOnCart: {
                    totalPriceOnCart: payload.totalOnShoppingCart,
                    totalItemsOnCart: payload.ItemsOnShoppingCart,
                },
            }

        case types.removeItemShoppingCart:
            return {
                ...state,
                itemsShoppingCart: state.itemsShoppingCart.filter( item => item.id !== payload)
            }

        default:
            return state;
    }


}

export default UiItemsContextReducer
