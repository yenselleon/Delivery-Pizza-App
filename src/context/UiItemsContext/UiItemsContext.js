import { useDisclosure } from '@chakra-ui/hooks';
import React, {createContext, useReducer, useEffect} from 'react';
import { totalShoppingCart } from '../../helper/totalTicketsList';
import { types } from '../types';
import UiItemsContextReducer from './UiItemsContextReducer';



const UiItemsContext = createContext();


const initialState = {
    dataItemsPizza: [],
    dataItemsDrinks: [],
    dataItemsDressings: [],
    itemsShoppingCart: JSON.parse(localStorage.getItem('itemsShoppingCart')) || [],
    totalPriceAndItemsOnCart: {},
    selectedItem: null,
}

const UiItemsContextProvider = ({children})=> {

    const [state, dispatch] = useReducer(UiItemsContextReducer, initialState)

    useEffect(() => {
        
        localStorage.setItem('itemsShoppingCart',JSON.stringify(state.itemsShoppingCart))

    }, [state.itemsShoppingCart])

    const { isOpen: isOpenMenuCart, onOpen: onOpenMenuCart, onClose: onCloseMenuCart} = useDisclosure();

    const { isOpen: isOpenSearchInput, onOpen: onOpenSearchInput, onClose: onCloseSearchInput} = useDisclosure();


    const openAndCloseHookMenuCart = {
        isOpenMenuCart,
        onOpenMenuCart,
        onCloseMenuCart,
    }

    const isOpenAndCloseHookSearchInput = {
        isOpenSearchInput,
        onOpenSearchInput,
        onCloseSearchInput
    }


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
        isOpenAndCloseHookSearchInput,
        openAndCloseHookMenuCart,
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