import { useDisclosure } from '@chakra-ui/react';
import React, { createContext, useContext, useReducer } from 'react';
import { types } from '../types';
import UiItemsContext from '../UiItemsContext/UiItemsContext';
import { ModalItemMenuContextReducer } from './ModalItemMenyContextReducer';

const ModalItemMenuContext = createContext();

const initialState = {
    itemMenu: null,
    selectedItem: null,
}

const ModalItemMenuContextProvider = ({children})=> {

    const [state, dispatch] = useReducer(ModalItemMenuContextReducer, initialState)


    const { isOpen, onOpen:onOpenModalCardMenu, onClose } = useDisclosure()


    

    const data = {
        itemMenu: state.itemMenu,
        selectedItem: state.selectedItem,
        isOpen,
        onOpenModalCardMenu,
        onClose,
    }

    return (
        <ModalItemMenuContext.Provider value={data}>
            {children}
        </ModalItemMenuContext.Provider>
    )

}

export {ModalItemMenuContextProvider};
export default ModalItemMenuContext;