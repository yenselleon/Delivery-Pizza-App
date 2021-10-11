import React, { useContext } from 'react'
import { Box,
         Flex,
         Text,
         FormControl,
         Input,
         FormHelperText,
         Button,
         Image,
         Link,
         FormErrorMessage } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {Formik, Form, Field} from 'formik'
import { Link as LinkRouterDom} from 'react-router-dom';
import * as Yup from 'yup';


import coolSvgShappe from '../img/cool-background.svg'
import blob from '../img/blob.svg'
import shape3 from '../img/shape3.svg'
import UserContext from '../context/UserContext/UserContext';

const initialValues = {
    email: '',
    password: '',
}

const validationLoginSchema = Yup.object().shape({
    email: Yup.string().email('the email is invalid').required('The email is required'),
    password: Yup.string().required('The password is required'),
})


const LoginScreen = () => {

    const {loginUser} = useContext(UserContext)


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
                px="4" 
                width={[
                    "100%", // base
                    "100%", // 480px upwards
                    "50%", // 768px upwards
                    "50%", // 992px upwards
                ]}
                position="relative"
                overflow="hidden"
            >
                <Image 
                    src={coolSvgShappe} 
                    position="absolute"
                    width={["200px", "250px", "200px"]}
                    height={["200px", "250px", "200px"]}
                    top="0px"
                    right="0"
                    objectFit="cover"
                    
                />

                <Image 
                    src={blob} 
                    position="absolute"
                    width="350px"
                    height="350px"
                    bottom="-75px"
                    left="-110px"
                    objectFit="cover"
                />

                <Image 
                    src={shape3} 
                    position="absolute"
                    width="350px"
                    height="350px"
                    bottom="0"
                    left="0"
                    right="0"
                    top="0"
                    margin="auto"
                    objectFit="cover"
                />

                <Link
                    as={LinkRouterDom} 
                    to="/auth" 
                    _hover={{ textDecoration: "none" }}
                >

                    <ChevronLeftIcon 
                        color="black" 
                        bg="white" 
                        borderRadius="50%" 
                        w={7} 
                        h={7}
                        mt="5"
                    />

                </Link>
                <Text 
                    fontSize="xl" 
                    fontWeight="bold" 
                    color="brand.base" 
                    mt="4"
                >
                    Login to your <br/>account
                </Text>

                <Box
                    bg="white"
                    borderRadius="md"
                    px="5"
                    py="10"
                    borderWidth="thin"
                    boxShadow="md"
                    width={["95%","85%", "90%"]}
                    m="auto"
                    mt="5"
                    position="relative"
                >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationLoginSchema}
                        onSubmit={async(values)=> {

                            try {
                                await validationLoginSchema.isValid(initialValues)
    
                                await loginUser(values);
                                
                            } catch (error) {
                                console.log(error)
                            }

                        }}
                    >
                        <Form>
                            <Field name="email">
                                {
                                    ({field,form})=>(

                                        <FormControl
                                            isRequired
                                            isInvalid={form.errors?.email && form.touched?.email}
                                        >
                                            <Input bg="white" placeholder="Email address" type="email" mb="3" mt="4" {...field}/>
                                            <FormErrorMessage>{form.errors?.fullName}</FormErrorMessage>

                                        </FormControl>
                                    )
                                }
                            </Field>

                            <Field name="password">
                                {
                                    ({field, form})=>(

                                        <FormControl
                                            isRequired
                                            isInvalid={form.errors?.password && form.touched?.password}
                                        >
                                            <Input bg="white" placeholder="Password" type="password" {...field}/>
                                            <FormErrorMessage>{form.errors?.fullName}</FormErrorMessage>


                                            <FormHelperText color="black" textAlign="right">Forgot your password?</FormHelperText>
                                        </FormControl>
                                        
                                    )
                                }
                            </Field>

                            <Button 
                                type="submit"
                                bg="brand.base" 
                                color="white" 
                                width="100%" 
                                textAlign="center" 
                                mt="4"
                            >
                                Login
                            </Button>

                        </Form>
                    </Formik>

                </Box>

            </Box>
        </Flex>

    )
}

export default LoginScreen
