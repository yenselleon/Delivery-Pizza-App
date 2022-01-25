import { Box, Container, Divider, Flex, Icon, Skeleton, Text, toast } from '@chakra-ui/react'
import { collection, doc, getDocs } from 'firebase/firestore/lite';
import React, { useContext, useEffect, useState } from 'react'
import { BiUser } from "react-icons/bi";
import UserContext from '../context/UserContext/UserContext';
import { dbFirestore } from '../firebase/firebaseConfig';

const UserAcountScreen = () => {


    const {user} = useContext(UserContext)

    const collectionPurchaseTikects = collection(dbFirestore, `shoppingData/${user.uid}/purchase`);
    const docPurchasedRef = doc(collectionPurchaseTikects);

    const [loading, setLoading] = useState(false);

    const [purchasedTickectData, setPurchasedTickectData] = useState({
        totalPaid: 0,
        totalItemsPurchased: 0
    })

    const getData = async()=> {

        const querySnapshot = await getDocs(collectionPurchaseTikects)

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const purchasedItemInfo = doc.data();

            setPurchasedTickectData(data => ({ 
                totalPaid: data.totalPaid + purchasedItemInfo.totalPaid,
                totalItemsPurchased: data.totalItemsPurchased + purchasedItemInfo.totalItemsPurchased
            }));
        });

            
        setLoading(true);
            
    }

        useEffect(() => {
            getData()

            return ()=> {
                setPurchasedTickectData([])
            }
        }, [])

        console.log(purchasedTickectData)
    return (
        <Container
            maxW={["100%", "100%", "container.lg", "container.lg"]}
            centerContent
            borderWidth="1px"
            borderRadius="lg"
            mt={['0', '3', '5']}
            pt="4"
            bg="gray.100"
        >
            <Skeleton 
                isLoaded={loading}
                width={'100%'}
                display="flex"
                justifyContent={'center'}
                marginBottom={'20px'}
                
            >
                <Flex
                    width={['95%','80%']}
                    height={'500px'}
                    border={'1px solid'}
                    borderColor={'gray.200'}
                    bg="white"
                    mt={"35px"}
                    pr={["10px", "0px"]}
                    boxShadow={"base"}
                >
                    <Box
                        display={['flex']}
                        width={["35%"]}
                        justifyContent={'center'}
                        alignItems={'center'}
                        background={'brand.base'}
                    >
                        <Box
                        >
                            <Flex
                                border={'2px solid gray.400'}
                                borderRadius={'50%'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                overflow={'hidden'}
                                background={'white'}
                                color={'gray.400'}
                            >
                                <Icon as={BiUser} fontSize={'80px'}/>
                            </Flex>
                                <Text
                                    marginTop={'10px'}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                    color={'white'}
                                >
                                    {user.fullName}
                                </Text>

                        </Box>
                    </Box>
                    <Flex
                        width={["70%"]}
                        display={['flex']}
                        justifyContent={'center'}
                        flexDirection={'column'}
                    >
                        <Flex
                            flexDirection={'column'}
                            width={'100%'}
                            justifySelf={'self-end'}
                            paddingX={'15px'}
                            marginBottom={'30px'}
                        >

                            <Flex
                                width={'100%'}
                                
                            >
                                <Text as="span" fontWeight={'bold'}>Email: <Text color={'gray.300'}>{user.email}</Text></Text>
                            </Flex>
                            <Divider/>
                            <Flex
                                width={'100%'}
                            >
                                <Text as="span" fontWeight={'bold'}>Full Address: <Text color={'gray.300'}>{user.address}</Text></Text>
                            </Flex>
                            <Divider/>
                            <Flex
                                width={'100%'}
                            >
                                <Text as="span" fontWeight={'bold'}>Phone: <Text color={'gray.300'}>{user.phone}</Text></Text>
                            </Flex>
                            <Divider/>
                        </Flex>

                        {/* statistics User */}
                        <Flex
                            width={'100%'}
                            justifyContent={'space-around'}
                            background={'gray.100'}
                            padding={'5px'}
                        >
                            <Box
                                textAlign={'center'}
                            >
                                <Text fontWeight={'bold'}>{purchasedTickectData.totalPaid}$</Text>
                                <Text 
                                    fontWeight={'medium'}
                                    color={'gray.400'}
                                >
                                    Total spent
                                </Text>
                            </Box>
                            <Box
                                textAlign={'center'}
                            >
                                <Text fontWeight={'bold'}>{purchasedTickectData.totalItemsPurchased}</Text>
                                <Text 
                                    fontWeight={'medium'}
                                    color={'gray.400'}
                                >
                                    Total Items Purchased
                                </Text>
                            </Box>

                        </Flex>
                    </Flex>
                </Flex>

            </Skeleton>
            

        
        </Container>
    )
}

export default UserAcountScreen
