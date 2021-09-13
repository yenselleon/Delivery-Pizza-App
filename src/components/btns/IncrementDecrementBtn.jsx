import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import IncrementBtn from './IncrementBtn'

const IncrementDecrementBtn = ({ml,mr}) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            py="1"
            px="3"
            bg="beige"
            borderRadius="lg"
            ml={ml}
            mr={mr}
        >
            <IncrementBtn />
            <Text
                fontWeight="bold"
                mx="2"
            >
                1
            </Text>

            <Box 
                as="button"
                h="5"
                w="5"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="black"
                borderRadius="50%"
            >
                <Icon as={AddIcon} w={3} h={3} color="white" />
            </Box>
        </Box>
    )
}

export default IncrementDecrementBtn
