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

        default:
            return state;
    }


}

export default UiItemsContextReducer
