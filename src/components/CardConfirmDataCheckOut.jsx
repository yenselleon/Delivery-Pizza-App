import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Divider, Text, Stack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { useToast } from '@chakra-ui/toast';

import { collection, doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { dbFirestore } from '../firebase/firebaseConfig';

import { Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState, useCallback } from 'react';

import { useParams, useHistory } from "react-router-dom";

import UserContext from '../context/UserContext/UserContext'



const CardConfirmDataCheckOut = () => {

    const history = useHistory();

    const {purchaseTikectId} = useParams();

    const toast = useToast();
    
    const {user, updateUserContext} = useContext(UserContext);
    
    const [loading, setLoading] = useState(true);
    
    const [purchasedTickectData, setPurchasedTickectData] = useState(null)

    const collectionPurchaseTikects = collection(dbFirestore, `shoppingData/${user.uid}/purchase`);
    const docPurchasedRef = doc(collectionPurchaseTikects, `${purchaseTikectId}`);

    const getData = useCallback(
        () => {
            getDoc(docPurchasedRef).then(async(doc)=>{
                console.log("peticion")
                if(!doc.exists()){
                    return toast({
                        title: `Error de conexion`,
                        status: "error",
                        isClosable: true,
                        })
        
                }else{
                    const purchasedItemInfo = doc.data();

                    //Avoid that another tickect will be update
                    if(purchasedItemInfo.status !== "checkOut") return history.replace(`/`);


                    setPurchasedTickectData(purchasedItemInfo);
                    
                    setLoading(false);
                }
        
        
            })
            
        },
        [purchaseTikectId],
    )

    useEffect(() => {
        
        getData();
        console.log("getData")

        //todo:
        //si getDocSnapshot regresa algo se debe de validar si esta en el estados correspondiente del step en el caso de que no devolver a home
        // de pasar todas las confirmaciones, colocar los datos devueltos en una variable en el context de uiContext()
        //una vez establecidas variables extraer los datos y mostrarlos en una card en el page de checkout

        return ()=> {
            setLoading(true)
        }
          
    }, [])

    
    console.log(purchasedTickectData)

    return (
        <Skeleton isLoaded={!loading} mb="5">

            <Stack 
                direction={["column","column", "row"]}
                bg="white"
                maxW="auto"
                py="3"
                px="4"
                borderRadius="md"
                boxShadow="md"
                d="flex"
                justifyContent="space-around"
                align="center"
                mb="5"
                height="auto"
                spacing="20px"
            >
                {/* table */}
                <Box 
                    
                >
                    <Text
                        textAlign="center"
                        fontWeight="semibold"
                        mb="5"
                    >
                        Purchased info
                    </Text>
                    <Table>
                        <Thead>
                            <Tr bg="whiteAlpha.600">
                            <Th>Method Payment</Th>
                            <Th>Total Items</Th>
                            <Th isNumeric>Total Paid</Th>
                            </Tr>
                        </Thead>

                        <Tbody >
                            <Tr bg="whiteAlpha.300" color="brand.base">
                                <Td>{purchasedTickectData?.methodPayment}</Td>
                                <Td>{purchasedTickectData?.totalItemsPurchased}</Td>
                                <Td isNumeric>{purchasedTickectData?.totalPaid}$</Td>
                            </Tr> 
                        </Tbody>
                        <TableCaption><Text as="span" color="gray.400">ID Tickect: </Text>{purchasedTickectData?.id}</TableCaption>
                    </Table>
                </Box>

                <Divider d={["block","block", "none" ]}/>

                {/* form */}
                <Box
                    borderLeft={["0","0","1px solid #cbd5e0","1px solid #cbd5e0"]}
                    pl="10px"
                    minWidth="200px"
                >
                    <Formik
                        initialValues={{
                            fullName: user.fullName,
                            address: user.address,
                            phone: user.phone,
                        }}
                        onSubmit={async(values)=> {

                            const collectionItems = collection(dbFirestore, `shoppingData/${user.uid}/items`);
                            const collectionPurchased = collection(dbFirestore, `shoppingData/${user.uid}/purchase`);
                            const collectionUser = collection(dbFirestore, `userData`);

                            const promiseUpdateArr = purchasedTickectData.items.map( async(item)=> {

                                const docRef = doc(collectionItems, item)
                                
                                console.log("Data Actualizada", item)
                                
                                await updateDoc(docRef, {
                                  status: "Info Confirmed"
                                })
                              })

                            //uptade current user
                            const uptadeUser = async()=> {

                                const docUserRef = doc(collectionUser, `${user.uid}`)
                                console.log("userActualizado", values)
                                
                                return await updateDoc(docUserRef, {
                                    fullName: values.fullName,
                                    address: values.address,
                                    phone: values.phone,
                                  })
                            }


                            //uptade current tikect purchase
                            const purchasedTickect = async()=> {

                                const docPurchasedTikectRef = doc(collectionPurchased, `${purchasedTickectData.id}`)
                                console.log("tikect Purchase actualizada", purchasedTickectData)

                                return await updateDoc(docPurchasedTikectRef, {
                                    status: "Info Confirmed"
                                  })
                            }
                            console.log(values)
                            
                            //await all promise 
                            await Promise.all( [...promiseUpdateArr,uptadeUser(), purchasedTickect()])

                            updateUserContext(values);
                            history.replace(`/checkout/2/${user.uid}/${purchasedTickectData.id}`)
                            /* nextStep() */
                            /* TODO */
                            //una vez se confirme actualizar todos los datos del usuario en la firestore, aun si son los mismos
                            //realizar un history.push a la url correspondiente con todos los datos correspondientes
                        }}
                    >
                        <Form
                        >

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

                            <Button
                                type="submit"
                                color="brand.base"
                                variant="outline"
                                borderWidth="thin"
                                borderColor="brand.base"
                                d="block"
                                
                                m="auto"
                                _hover={{color: "white", background: "brand.base"}}
                                _focus={{color: "white", background: "brand.base", borderColor: "none"}}
                            >
                                Confirm
                            </Button>

                        </Form>
                    </Formik>

                </Box>
            </Stack >
        </Skeleton>
    )
}

export default CardConfirmDataCheckOut
