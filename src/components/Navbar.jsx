import React, { useContext, useEffect } from 'react';
import {Flex,
        Button, 
        Icon, 
        Menu,
        MenuButton, 
        MenuList, 
        MenuItem, 
        Text, 
        InputGroup, 
        InputLeftElement,
        Spacer,
        IconButton,
        HStack,
        Stack,
        Box,
        Input} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import {FaShoppingCart, FaUserAlt, FaHome, FaSearch} from 'react-icons/fa';
import UiItemsContext from '../context/UiItemsContext/UiItemsContext';
import CardItemShoppingCart from './CardItemShoppingCart';

const Navbar = () => {
    const { itemsShoppingCart, totalPriceAndItemsOnCart, addTotalPriceAndItemsOnCart } = useContext(UiItemsContext);

    
    useEffect(() => {
        
        if(itemsShoppingCart.length > 0){
            
            addTotalPriceAndItemsOnCart(itemsShoppingCart)
        }
        
    }, [itemsShoppingCart])
    
    console.log({totalPriceAndItemsOnCart})

    return (

            <Flex
                pos={["fixed", "sticky"]}
                align="center"
                width="100%"
                boxShadow={['dark-lg', 'lg', 'lg', 'lg']}
                padding="4"
                top={['inherit','0','0','0']}
                bottom={['0', 'inherit', 'inherit', 'inherit']}
                bg={['brand.base', "whiteAlpha.900"]}
                zIndex="9999999"
            >
    
                <Flex
                    width='inherit'
                    align="center"
                    display={['none', 'flex', 'flex', 'flex']}
                >
                    {/* logo */}
                    <Flex width="100px" border="1px solid red">
        
                    </Flex>
                    <Spacer />
        
                    {/* Search Input */}
                    <InputGroup
                        mx="3"
                        maxWidth="lg"
                    >
                        <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="text" placeholder="Search your favorite pizza" />
                    </InputGroup>
        
                    <Spacer />
                    <HStack
                        justifyItems="center"
                        align="center"
                    >
        
                        {/* shopping cart */}
                        <Menu
                            closeOnSelect={false}
                            
                        >
                            {({ isOpen}) => (
                                <>
                                    <MenuButton 
                                        isActive={isOpen} 
                                        as={Button} 
                                        leftIcon={<FaShoppingCart />}
                                    >
                                        {itemsShoppingCart.length}
                                    </MenuButton>
                                    <MenuList
                                        height="sm"
                                        width="sm"
                                        overflow="scroll"
                                        overflowX="hidden"
                                        overflowY="scroll"
                                        position="relative"
                                        p="0"
                                    >
                                        {
                                            /* none item section */
                                            (itemsShoppingCart.length === 0)
                                                ?
                                                    <MenuItem
                                                        height="100%"
                                                        width="100%"
                                                        _focus={{background: "white"}}
                                                    >
                                                        <Flex
                                                            direction="column"
                                                            justifyContent="center"
                                                            align="center"
                                                            color="gray.400"
                                                        >
                    
                                                            <Icon
                                                                as={FaShoppingCart}
                                                                w={8} h={8}
                                                            />
                                                            <Text
                                                                as="span"
                                                                textAlign="center"
                                                            >
                                                                You dont have any product on your cart shopping
                                                            </Text>
                    
                                                        </Flex>
                                                        
                                                    </MenuItem>
                                                :
                                                    /* Items Cart section */
                                                    itemsShoppingCart.map((item, index) => (
                                                        <MenuItem
                                                            key={item.id}
                                                            height="auto"
                                                            width="full"
                                                            display="block"
                                                            borderTop="1px solid whitesmoke"
                                                            borderBottom="1px solid whitesmoke"
                                                            _hover={{bg:"red.50"}}
                                                        >
                                                            <CardItemShoppingCart  {...item}/>
                                                            
                                                        </MenuItem>
                                                    ))
                                                
                                            }
                                            <Box
                                                position="sticky"
                                                bottom="0"
                                                right="0"
                                                background="brand.base"
                                                py="1"
                                                px="2"
                                                d="flex"
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Text color="white" fontWeight="bold">Total: {totalPriceAndItemsOnCart.totalPriceOnCart}$</Text>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    borderWidth="0.2rem"
                                                    color="white"
                                                    _hover={{background:"white", color:"brand.base"}}
                                                >
                                                    CheckOut
                                                </Button>
                                            </Box>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                            
                        <Button
                            size="md"
                            mx="2"
                            display={['none', 'none', 'none', 'initial']}
                        >
                            Log In
                        </Button>
                        <IconButton
                            variant="solid"
                            aria-label="Call Sage"
                            fontSize="20px"
                            display={['flex', 'flex', 'flex', 'none']}
                            justifyContent="center"
                            alignContent="center"
                            icon={<FaUserAlt />}

                        />

                    </HStack>
                </Flex>
                
                {/* Navbar Mobile Mode */}
                <Stack 
                    direction="row"
                    justifyContent="space-around"
                    width="inherit"
                    display={['flex', "none"]}
                    
                >
                    <IconButton
                        w="40px" 
                        h="40px"
                        color="whiteAlpha.800"
                        fontSize="24px"
                        bg={['brand.base']}
                        shadow="dark-lg"
                        icon={<FaHome />}
                    />
                    <IconButton
                        w="40px" 
                        h="40px"
                        color="whiteAlpha.800"
                        fontSize="24px"
                        bg={['brand.base']}
                        shadow="dark-lg"
                        icon={<FaSearch />}
                    />
                    <IconButton
                        w="40px" 
                        h="40px"
                        color="whiteAlpha.800"
                        fontSize="24px"
                        bg={['brand.base']}
                        shadow="dark-lg"
                        icon={<FaShoppingCart />}
                    />
                    <IconButton
                        w="40px" 
                        h="40px"
                        color="whiteAlpha.800"
                        fontSize="24px"
                        bg={['brand.base']}
                        shadow="dark-lg"
                        icon={<FaUserAlt />}
                    />
                    
                </Stack>
            </Flex>
           

    )
}

export default Navbar;
