import { AddIcon } from '@chakra-ui/icons'
import { Box, Icon } from '@chakra-ui/react'
import React from 'react'

const IncrementBtn = ({ml, mr, item, pushItemOnclick}) => {

    return (
        <Box 
            as="button"
            h="5"
            w="5"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="black"
            borderRadius="50%"
            ml={ml}
            mr={mr}
            type="button"
            onClick={()=> pushItemOnclick(item, item.quanty = 1)}
        >
            <Icon as={AddIcon} w={3} h={3} color="white" />
        </Box>
    )
}

export default IncrementBtn
