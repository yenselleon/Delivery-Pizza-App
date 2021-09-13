import React, {createContext, useReducer} from 'react';
import { menuList } from '../../helper/menuList';
import { types } from '../types';
import UiItemsContextReducer from './UiItemsContextReducer';



const UiItemsContext = createContext();

const initialState = {
    dataItemsMenuPizza: [],
    selectedItem: null,
}

const UiItemsContextProvider = ({children})=> {


    const [state, dispatch] = useReducer(UiItemsContextReducer, initialState)

    const getDataItemsMenu = ()=>{

        dispatch({
            type: types.getDataItemsMenuPizza,
            payload: menuList,
        })
    }

    const getItemMenuById = (id)=> {


        const filterItemMenu = state.dataItemsMenuPizza.filter(item => item.id === id);

        dispatch({
            type: types.getItemMenyById,
            payload: filterItemMenu,
        })

        
    }

    const data = {
        dataItemsMenuPizza: state.dataItemsMenuPizza,
        getDataItemsMenu,
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