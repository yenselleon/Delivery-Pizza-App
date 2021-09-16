import React, {createContext, useReducer} from 'react';
import { types } from '../types';
import UiItemsContextReducer from './UiItemsContextReducer';



const UiItemsContext = createContext();

const initialState = {
    dataItemsPizza: [],
    dataItemsDrinks: [],
    dataItemsDressings: [],
    selectedItem: null,
}

const UiItemsContextProvider = ({children})=> {


    const [state, dispatch] = useReducer(UiItemsContextReducer, initialState)

    const getDataItems = (data, pushArrayState)=>{

        dispatch({
            type: types.getDataItems,
            payload: {
                data,
                pushArrayState,
            },
        })
    }

    const getItemMenuById = (id)=> {


        const filterItemMenu = state.dataItemsPizza.filter(item => item.id === id);

        dispatch({
            type: types.getItemMenyById,
            payload: filterItemMenu,
        })

        
    }

    const data = {
        dataItemsMenu: {
            dataItemsPizza: state.dataItemsPizza,
            dataItemsDrinks: state.dataItemsDrinks,
            dataItemsDressings: state.dataItemsDressings,
        },
        getDataItems,
        getItemMenuById,
        selectedItem: state.selectedItem,
    }

    return (
        <UiItemsContext.Provider value={data}>
            {children}
        </UiItemsContext.Provider>
    )
}


export {UiItemsContextProvider};
export default UiItemsContext;