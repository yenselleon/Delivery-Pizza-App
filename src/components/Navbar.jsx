import React, { useContext } from 'react';
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
        Image,
        Spacer,
        Box,
        IconButton,
        HStack,
        Stack,
        Collapse,
        useDisclosure,
        Input} from '@chakra-ui/react';
import {SearchIcon, ChevronDownIcon} from '@chakra-ui/icons';
import {FaShoppingCart, FaUserAlt, FaHome, FaSearch} from 'react-icons/fa';
import TableItemsShoppingCarT from './TableItemsShoppingCart'
import UiItemsContext from '../context/UiItemsContext/UiItemsContext';

const Navbar = () => {
    const { isOpen: isOpenColapse, onToggle } = useDisclosure()
    const { itemsShoppingCart } = useContext(UiItemsContext);

    console.log({itemsShoppingCart})
    return (

            <Flex
                pos={["fixed", "sticky"]}
                align="center"
                width="100vw"
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
                            mx="2"
                            closeOnSelect={false}
                            
                        >
                            {({ isOpen}) => (
                                <>
                                    <MenuButton 
                                        isActive={isOpen} 
                                        as={Button} 
                                        leftIcon={<FaShoppingCart />}
                                    >
                                        {isOpen ? "Close" : "Open"}
                                    </MenuButton>
                                    <MenuList
                                        height="sm"
                                        width="sm"
                                        overflow="scroll"
                                        overflowX="hidden"
                                        overflowY="scroll"
                                    >
                                        {/* none item section */}
                                        {
                                            (itemsShoppingCart)
                                                ?
                                                    <MenuItem
                                                        height="100%"
                                                        width="100%"
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
                                                                src={itemsShoppingCart[0].imageUrl}
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
                                                                <Text textAlign="end" fontWeight="bold" color="brand.base">10$</Text>
                                                                <Text as="span" fontWeight="semibold">{itemsShoppingCart.title}</Text>
                                                                <Text color="gray.400">{itemsShoppingCart.length} items</Text>
                                                                <Box
                                                                    onClick={onToggle}
                                                                    display="flex"
                                                                    justifyContent="flex-end"
                                                                    fontSize="24"
                                                                >
                                                                    <Icon as={ChevronDownIcon} />

                                                                </Box>
                                                            </Box>
                                                        </Flex>
                                                        <Collapse in={isOpenColapse} animateOpacity>
                                                            
                                                            <TableItemsShoppingCarT />
                                                            
                                                        </Collapse>
                                                    </MenuItem>
                                                
                                            }
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
