import React from 'react';
import {Flex,
        Switch, 
        useColorMode, 
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
        Input} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import {FaShoppingCart, FaUserAlt, FaHome, FaSearch} from 'react-icons/fa';

const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <Box width="100%" height="100vh" border="1px solid red">

            <Flex
                pos="fixed"
                align="center"
                width="100%"
                boxShadow={['dark-lg', 'lg', 'lg', 'lg']}
                padding="4"
                top={['inherit','0','0','0']}
                bottom={['0', 'inherit', 'inherit', 'inherit']}
                bg={['brand.base', "initial"]}
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
                                        {/* <MenuItem
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
                                                >
                                                    You dont have any product on your cart shopping
                                                </Text>
        
                                            </Flex>
                                            
                                        </MenuItem> */}
                                        <MenuItem
                                            height="150"
                                            width="full"
                                        >
                                            <Flex
                                                padding="2"
                                            >
                                                <Image>
        
                                                </Image>
                                            </Flex>
                                        </MenuItem>
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

                        <Switch
                            color="greem"
                            onChange={toggleColorMode}
                            isChecked={isDark}
                        />
                    </HStack>
                </Flex>
    
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
           

        </Box>
    )
}

export default Navbar;
