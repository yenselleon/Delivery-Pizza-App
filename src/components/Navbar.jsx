import React, { useContext, useEffect } from 'react';
import {Flex,
        Button, 
        Icon, 
        Menu,
        MenuButton, 
        MenuList, 
        MenuItem, 
        Text, 
        Spacer,
        IconButton,
        HStack,
        Box,
        Link,} from '@chakra-ui/react';
import {FaShoppingCart, FaUserAlt} from 'react-icons/fa';
import UiItemsContext from '../context/UiItemsContext/UiItemsContext';
import CardItemShoppingCart from './CardItemShoppingCart';
import InputSearchAutoComplete from './InputSearchAutoComplete';
import { Link as LinkRouterDom, useHistory} from 'react-router-dom';
import MobileBottomNavbar from './MobileBottomNavbar';
import UserContext from '../context/UserContext/UserContext';

import avilaPizza from '../img/AvilaPizza.svg'

const Navbar = () => {

    const history = useHistory();

    const { itemsShoppingCart,
            totalPriceAndItemsOnCart, 
            addTotalPriceAndItemsOnCart, 
            openAndCloseHookMenuCart,
            clearItemsShoppingCart } = useContext(UiItemsContext);

    const {singOutUser, logged, user} = useContext(UserContext);

    const {isOpenMenuCart,
            onOpenMenuCart,
            onCloseMenuCart,} = openAndCloseHookMenuCart;

    
    useEffect(() => {
        
        if(itemsShoppingCart.length > 0){
            
            addTotalPriceAndItemsOnCart(itemsShoppingCart)
        }
        
    }, [itemsShoppingCart])
    

    return (

            <Flex
                pos={["fixed","sticky"]}
                align="center"
                width="100%"
                boxShadow={['dark-lg', 'lg', 'lg', 'lg']}
                padding="1"
                top={["none","0"]}
                bottom={["0","none"]}
                bg={['brand.base', "whiteAlpha.900"]}
                zIndex="999"
                mt="0"
            >
    
                <Flex
                    width='inherit'
                    align="center"
                    display={['none', 'flex', 'flex', 'flex']}
                >
                    {/* logo */}
                    <Link
                        width="80px" 
                        height="60px"
                        marginLeft="10px"
                        display="flex"
                        justifyContent="center"
                        cursor="pointer"
                        as={LinkRouterDom}
                        to="/" 
                    >
                        <img src={avilaPizza} alt="" />
                    </Link>
                    <Spacer />
        
                    {/* Search Input */}
                    <InputSearchAutoComplete/>
        
                    <Spacer />
                    <HStack
                        justifyItems="center"
                        align="center"
                    >
        
                        {/* shopping cart */}
                        <Menu
                            closeOnSelect={false}
                            isOpen={isOpenMenuCart}
                            onClose={onCloseMenuCart}
                            onOpen={onOpenMenuCart}
                        >
                            {() => (
                                <>
                                    <MenuButton 
                                        isActive={isOpenMenuCart} 
                                        as={Button} 
                                        position="relative"
                                    >
                                        <FaShoppingCart />
                                        {
                                            (itemsShoppingCart.length > 0) &&
                                                <Box
                                                    position="absolute"
                                                    top="0"
                                                    right="0px"
                                                    borderRadius="50%"
                                                    bg="brand.base"
                                                    d="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    zIndex="overlay"
                                                    p="4px 6px 4px 7px"
                                                >
                                                    <Text
                                                        as="span"
                                                        fontSize="9px"
                                                        color="white"
                                                        textAlign="center"
                                                        d="inline"
                                                        margin="0"
                                                        p="0"
                                                        borderRadius="50%"
                                                    >
                                                        {
                                                            (itemsShoppingCart.length <= 9) ?
                                                                itemsShoppingCart.length
                                                            :
                                                                "9+"
                                                        }
                                                    </Text>
                                                </Box>
                                        

                                        }
                                    </MenuButton>
                                    <MenuList
                                        maxHeight="xs"
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
                                                d={(itemsShoppingCart.length === 0) ? 'none' : "flex"}
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Text color="white" fontWeight="bold">Total: {totalPriceAndItemsOnCart.totalPriceOnCart}$</Text>
                                                <Link  
                                                    as={LinkRouterDom} 
                                                    to={
                                                        (user) ?
                                                            `/checkout/0/${user.uid}`
                                                        :
                                                            `/auth/`
                                                    } 
                                                    _hover={{textDecoration: 'none'}}
                                                >
                                                    
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        borderWidth="0.2rem"
                                                        color="white"
                                                        _hover={{background:"white", color:"brand.base"}}
                                                        onClick={onCloseMenuCart}
                                                    >
                                                        CheckOut
                                                    </Button>

                                                </Link>
                                            </Box>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        
                        
                        {/* Menu profile */}
                        <Menu
                            size="xs"
                        >
                            <MenuButton
                                as={IconButton} 
                                variant="solid"
                                transition="all 0.2s"
                                _hover={{ bg: "gray.400" }}
                                _expanded={{ bg: "brand.base", color: "white" }}
                                _focus={{outlineColor: "none"}}
                                icon={<FaUserAlt />}
                            />
                                
                            {
                                (logged)
                                ?   
                                    <MenuList> 
                                        <MenuItem
                                            onClick={
                                                ()=> history.push('/myAcount')
                                            }
                                        >
                                            My Account
                                        </MenuItem>
                                        <MenuItem
                                            onClick={async()=> {
                                                await singOutUser();
                                                clearItemsShoppingCart();
                                                history.replace('/')
                                            }}
                                        >
                                            Log out
                                        </MenuItem>
                                    </MenuList>
                                :
                                    <MenuList>
                                        <Link as={LinkRouterDom} to="/auth/login" _hover={{textDecoration: 'none'}}>
                                            <MenuItem>Sign in</MenuItem>
                                        </Link>

                                        <Link as={LinkRouterDom} to="/auth/register" _hover={{textDecoration: 'none'}}>
                                            <MenuItem>Sign up</MenuItem>
                                        </Link>
                                    </MenuList>
                            }
                                
                                
                        </Menu>


                    </HStack>
                </Flex>
                
                {/* Navbar Mobile Mode */}
                <MobileBottomNavbar />
            </Flex>
           

    )
}

export default Navbar;
