import Icon from '@chakra-ui/icon'
import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
import { MenuItem } from '@chakra-ui/menu'
import { Collapse } from '@chakra-ui/transition'
import {useDisclosure, Box, HStack, IconButton} from '@chakra-ui/react'
import React, { useContext } from 'react'
import TableItemsShoppingCart from './TableItemsShoppingCart'
import UiItemsContext from '../context/UiItemsContext/UiItemsContext'

const CardItemShoppingCart = ({...item}) => {
    const { isOpen: isOpenColapse, onToggle } = useDisclosure()

    const { removeItemToShoppingCart } = useContext(UiItemsContext);
    


    return (
        <MenuItem
            height="auto"
            width="full"
            display="block"
            borderTop="1px solid whitesmoke"
            borderBottom="1px solid whitesmoke"
        >
            <Flex
                width="inherit"
                height="inherit"
                align="center"
            >
                <Image
                    src={item.imageUrl}
                    height="100px"
                    width="100px"
                    p="1"
                    borderRadius="lg"

                />
                <Box
                    height="inherit"
                    width="100%"
                    isTruncated
                    px="2"
                >
                    {/* Price Section */}
                    <Text textAlign="end" fontWeight="bold" color="brand.base">{item.total}$</Text>
                    <Text as="span" fontWeight="semibold">{item.title}</Text>
                    <Text color="gray.400">var items</Text>
                    <HStack
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <IconButton as={DeleteIcon} mr="3" size="xs" p="1" colorScheme="gray" onClick={()=> removeItemToShoppingCart(item.id)} />
                        
                        <Icon as={ChevronDownIcon} onClick={onToggle} fontSize="24"/>
                    </HStack>
                </Box>
            </Flex>
            <Collapse in={isOpenColapse} animateOpacity>
                
                <TableItemsShoppingCart {...item}/>
                
            </Collapse>
        </MenuItem>
    )
}

export default CardItemShoppingCart
