import { CloseButton } from '@chakra-ui/close-button';
import { Box } from '@chakra-ui/layout';
import React, { useContext } from 'react'
import UiItemsContext from '../context/UiItemsContext/UiItemsContext';
import InputSearchAutoComplete from './InputSearchAutoComplete'

const OverlaySearchInputAutoComplete = () => {

    const { isOpenAndCloseHookSearchInput } = useContext(UiItemsContext);

    const { isOpenSearchInput } = isOpenAndCloseHookSearchInput;


    return (
        <Box
            bg="blackAlpha.600"
            width="100%"
            height="100vh"
            overflow="none"
            position="fixed"
            zIndex="overlay"
            d={(isOpenSearchInput) ? ['flex', 'none'] : 'none'}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            
            <InputSearchAutoComplete/>
        </Box>
    )
}

export default OverlaySearchInputAutoComplete
