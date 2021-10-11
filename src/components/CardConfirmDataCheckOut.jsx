import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Text } from '@chakra-ui/layout'
import { Field, Form, Formik } from 'formik'
import React from 'react'

const initialValues = {
    fullName: '',
    address: '',
    phone: '',
    email: '',
}

const CardConfirmDataCheckOut = () => {
    return (
        <Box
            bg="white"
            maxW="500px"
            py="3"
            px="4"
            borderRadius="md"
            boxShadow="md"
            mb="3"
        >
            <Formik
                initialValues={initialValues}
            >
                <Form>

                    <Text
                        textAlign="center"
                        fontWeight="semibold"
                        mb="5"
                    >
                        Confirm Your Information
                    </Text>

                    <Field name="fullName">
                        {
                            ({field})=>(
                                <FormControl>
                                    <FormLabel>
                                        Full Name
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        mb="2"
                                        placeholder="Enter your full name"
                                        {...field}
                                    />

                                </FormControl>
                            )
                        }
                    </Field>

                    <Field name="address">
                        {
                            ({field})=>(
                                <FormControl>
                                    <FormLabel>
                                        Address
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        mb="2"
                                        placeholder="Enter your address"
                                        {...field}
                                    />
                                </FormControl>
                            )
                        }
                    </Field>

                    <Field name="phone">
                        {
                            ({field})=>(
                                <FormControl>
                                    <FormLabel>Phone</FormLabel>
                                    <Input
                                        type="tel"
                                        mb="2"
                                        placeholder="Enter your phone"
                                        {...field}
                                    />
                                </FormControl>
                            )
                        }
                    </Field>

                    <Field name="email">
                        {
                            ({field})=>(
                                <FormControl>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <Input
                                        type="email"
                                        mb="2"
                                        placeholder="Enter your email"
                                        {...field}
                                    />
                                </FormControl>
                            )
                        }
                    </Field>

                    <Button
                        type="submit"
                        color="brand.base"
                        variant="outline"
                        borderWidth="thin"
                        borderColor="brand.base"
                        _hover={{color: "white", background: "brand.base"}}
                        _focus={{color: "white", background: "brand.base", borderColor: "none"}}
                    >
                        Confirm
                    </Button>

                </Form>
            </Formik>
        </Box>
    )
}

export default CardConfirmDataCheckOut
