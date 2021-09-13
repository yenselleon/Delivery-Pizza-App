import { types } from "../types";


const UiItemsContextReducer = (state , action) => {
    const {type, payload} = action;

    switch (type) {
        case types.getDataItemsMenuPizza:
            return {
                ...state,
                dataItemsMenuPizza: payload,
            }
            
        case types.getItemMenyById:
            return {
                ...state,
                selectedItem: payload,
            }

        default:
            return state;
    }


}

export default UiItemsContextReducer
