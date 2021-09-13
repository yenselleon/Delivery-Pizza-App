import React from 'react'
import { Heading } from '@chakra-ui/layout'
import { Box,
         Flex,
         Text,
         FormControl,
         FormLabel,
         FormErrorMessage,
         Input,
         FormHelperText,
         Button, } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const LoginScreen = () => {
    return (
        <Flex bg="gray.100" height="100vh">
            <Box 
                display={["none", "none", "flex", "flex"]} 
                bg="brand.base"
                width={[
                    "100%", // base
                    "100%", // 480px upwards
                    "50%", // 768px upwards
                    "50%", // 992px upwards
                ]}
            >
                <Text>Hola mundo</Text>
            </Box>

            <Box 
                p="4" 
                width={[
                    "100%", // base
                    "100%", // 480px upwards
                    "50%", // 768px upwards
                    "50%", // 992px upwards
                ]}
            >
                <ChevronLeftIcon 
                    color="black" 
                    bg="white" 
                    borderRadius="50%" 
                    w={7} 
                    h={7}
                />
                <Text 
                    fontSize="xl" 
                    fontWeight="bold" 
                    color="brand.base" 
                    mt="4"
                >
                    Login to your <br/>account
                </Text>

                <FormControl id="email">
                    <Input bg="white" placeholder="Email address" type="email" mb="3" mt="4"/>
                    <Input bg="white" placeholder="Password" type="password" />
                    <FormHelperText color="black" textAlign="right">Forgot your password?</FormHelperText>

                    <Button 
                        
                        bg="brand.base" 
                        color="white" 
                        width="100%" 
                        textAlign="center" 
                        mt="4"
                    >
                        Login
                    </Button>
                </FormControl>
            </Box>
        </Flex>

    )
}

export default LoginScreen
