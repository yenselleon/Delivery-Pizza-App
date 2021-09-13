import { types } from "../types";


export const ModalItemMenuContextReducer = (state, action)=> {
    const {type, payload} = action;

    switch (type) {
        case types.getItemMenyById:
            return {
                ...state,
                itemMenu: payload,
            }
    
        default:
            return state;
    }
} 