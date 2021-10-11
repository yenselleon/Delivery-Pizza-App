import React, { useContext } from 'react'
import { Box,
         Flex,
         Text,
         FormControl,
         /* FormLabel, */
         FormErrorMessage,
         Input,
         Button,
         Link,
         Image } from '@chakra-ui/react'

import coolSvgShappe from '../img/cool-background.svg'
import blob from '../img/blob.svg'
import shape3 from '../img/shape3.svg'

import * as Yup from 'yup';

import { ChevronLeftIcon } from '@chakra-ui/icons'

import {Formik, Form, Field} from 'formik';

import { Link as LinkRouterDom} from 'react-router-dom';
import UserContext from '../context/UserContext/UserContext'

const initialValues = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
}

const validationRegistrationSchema = Yup.object().shape({

    fullName: Yup.string().required('the name is required'),
    phone: Yup.string().required('the phone number is required'),
    email: Yup.string().email('email is invalid').required('the email is required'),
    address: Yup.string().required('the address is required'),
    password: Yup.string().min(8, 'the password must contain more than 8 characters').required('the password is required'),
    confirmPassword: Yup.string().required('the confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),

});


const RegisterScreen = () => {


    const {createNewUser} = useContext(UserContext);

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
                    />

                </Link>
                <Text fontSize="xl" fontWeight="bold" color="brand.base" mt="4">
                    Create your <br/>account
                </Text>


                <Box
                    bg="whiteAlpha.900"
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
                        validationSchema={validationRegistrationSchema}
                        onSubmit={ async(values)=> {
                            
                            validationRegistrationSchema.isValid(initialValues).then((...p)=> console.log({p})).catch(err => console.log({err}))

                            await createNewUser(values);

                            
                        }}
                    >
                        <Form>

                            <Field name="fullName">
                                {
                                    ({field, form})=> (

                                    <FormControl 
                                        mb="3"
                                        isRequired
                                        isInvalid={form.errors?.fullName && form.touched?.fullName}
                                    >
                                        <Input bg="white" placeholder="Full Name" type="text" mt="4" {...field}/>
                                        <FormErrorMessage>{form.errors?.fullName}</FormErrorMessage>
                                    </FormControl>
                                    )
                                }
                            </Field>

                            <Field name="phone" isRequired>
                                {
                                    ({field, form})=> (

                                        <FormControl
                                            mb="3"
                                            isRequired
                                            isInvalid={form.errors?.phone && form.touched?.phone}
                                        >

                                            <Input bg="white" placeholder="Phone" type="phone"  {...field}/>
                                            <FormErrorMessage>{form.errors?.phone}</FormErrorMessage>
                                        </FormControl>
                                    )
                                }

                            </Field>

                            <Field name="email" isRequired>
                                {
                                    ({field, form})=> (
                                        <FormControl
                                            mb="3"
                                            isRequired
                                            isInvalid={form.errors?.email && form.touched?.email}
                                        >
                                            <Input bg="white" placeholder="Email" type="email"  {...field}/>
                                            <FormErrorMessage>{form.errors?.email}</FormErrorMessage>
                                        </FormControl>
                                    )
                                }

                            </Field>

                            <Field name="address" isRequired>
                                {
                                    ({field,form})=> (
                                        <FormControl
                                            mb="3"
                                            isRequired
                                            isInvalid={form.errors?.address && form.touched?.address}
                                        >
                                            <Input bg="white" placeholder="Address" type="text" {...field}/>
                                            <FormErrorMessage>{form.errors?.address}</FormErrorMessage>
                                        </FormControl>
                                    )
                                }

                            </Field>

                            <Field name="password" isRequired>
                                {
                                    ({field, form})=> (
                                        <FormControl
                                            isRequired
                                            isInvalid={form.errors?.password && form.touched?.password}
                                            mb="3"
                                        >
                                            <Input bg="white" placeholder="Password" type="password" {...field}/>
                                            <FormErrorMessage>{form.errors?.password}</FormErrorMessage>
                                        </FormControl >
                                    )
                                }

                            </Field>

                            <Field name="confirmPassword" isRequired>
                                {
                                    ({field, form})=> (

                                        <FormControl
                                            isRequired
                                            isInvalid={form.errors?.confirmPassword && form.touched?.confirmPassword}
                                        >
                                            <Input bg="white" placeholder="Repeat Password" type="password" {...field}/>
                                            <FormErrorMessage>{form.errors?.confirmPassword}</FormErrorMessage>
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
                                Register
                            </Button>

                        </Form>
                    </Formik>
                
                </Box>

            </Box>
        </Flex>
    )
}

export default RegisterScreen;
