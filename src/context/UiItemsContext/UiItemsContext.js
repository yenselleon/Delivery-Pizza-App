import React, {createContext, useReducer} from 'react';
import { totalShoppingCart } from '../../helper/totalTicketsList';
import { types } from '../types';
import UiItemsContextReducer from './UiItemsContextReducer';



const UiItemsContext = createContext();

const ShoppingCartLocalStorage = JSON.parse(localStorage.getItem('itemsShoppingCart')) || [];

const initialState = {
    dataItemsPizza: [],
    dataItemsDrinks: [],
    dataItemsDressings: [],
    itemsShoppingCart: ShoppingCartLocalStorage,
    totalPriceAndItemsOnCart: {},
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

    const pushItemToShoppingCart = (item)=> {

        
        dispatch({
            type: types.pushItemToShoppingCart,
            payload: item,
        })
        
        
    }

    const removeItemToShoppingCart = (id) => {
        
        dispatch({
            type: types.removeItemShoppingCart,
            payload: id
        })
    }

    const getTotalItemsOnCart = (item = [])=> {
        console.log({item})

        dispatch({
            type: types.pushItemToShoppingCart,
            payload: item,
        })

        
    }

    const addTotalPriceAndItemsOnCart = (totalTikects = [])=> {

        const {totalOnShoppingCart, ItemsOnShoppingCart} = totalShoppingCart(totalTikects)

        dispatch({
            type: types.addTotalPriceAndItemsOnCart,
            payload: {
                totalOnShoppingCart,
                ItemsOnShoppingCart,
            },
        })

        
    }

    const data = {
        dataItemsMenu: {
            dataItemsPizza: state.dataItemsPizza,
            dataItemsDrinks: state.dataItemsDrinks,
            dataItemsDressings: state.dataItemsDressings,
        },
        selectedItem: state.selectedItem,
        itemsShoppingCart: state.itemsShoppingCart,
        totalPriceAndItemsOnCart: state.totalPriceAndItemsOnCart,
        getDataItems,
        getItemMenuById,
        pushItemToShoppingCart,
        getTotalItemsOnCart,
        removeItemToShoppingCart,
        addTotalPriceAndItemsOnCart,
    }

    return (
        <UiItemsContext.Provider value={data}>
            {children}
        </UiItemsContext.Provider>
    )
}


export {UiItemsContextProvider};
export default UiItemsContext;