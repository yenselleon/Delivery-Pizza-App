import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext/UserContext';
import { Timeline, Bookmark } from 'react-vertical-timeline';
import {Box, Icon} from '@chakra-ui/react'
import { FaShippingFast, FaClipboardCheck, FaCheckSquare } from "react-icons/fa";
import { useParams, useHistory } from 'react-router-dom';

import { useToast } from '@chakra-ui/toast';

import { collection, doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { dbFirestore } from '../firebase/firebaseConfig';

import '../styles/components/timeLineDelivery.css'

let timer;

const TimeLineDelivery = () => {

    const {user} = useContext(UserContext);

    const history = useHistory();

    const toast = useToast();

    const {purchaseTikectId} = useParams();

    const [progress, setProgress] = useState(0)

    const [loading, setLoading] = useState(true);
    
    const [tickectCheck, setTickectCheck] = useState(false)

    console.log("TimeLineShipped", user)

    const startTiming = ()=> timer = setInterval(()=> setProgress( t => t + 50), 2500);

    const collectionPurchaseTikects = collection(dbFirestore, `shoppingData/${user.uid}/purchase`);
    const docPurchasedRef = doc(collectionPurchaseTikects, `${purchaseTikectId}`);

    const checkTickectStatus = ()=> {
        getDoc(docPurchasedRef).then(async(doc)=>{
            console.log("peticion checkTickectStatus")
            if(!doc.exists()){
                return toast({
                    title: `Error de conexion`,
                    status: "error",
                    isClosable: true,
                    })
    
            }else{
                const purchasedItemInfo = doc.data();

                //Avoid that another tickect will be update
                if(purchasedItemInfo.status !== "Info Confirmed"){
                    return history.replace(`/`);
                }else{
                    setTickectCheck(true)
                    setLoading(false);
                    console.log("tickect checket")
                }

            }
    
        })
    }

    const updateTickectPurchase = async()=> {

        console.log("Status tikect actualizada")
        
        return await updateDoc(docPurchasedRef, {
            status: "delivered",
        })
    }

    useEffect(() => {
        if(!tickectCheck){
            checkTickectStatus();
        
        }

        return ()=>{
            setTickectCheck(false)
            setLoading(true);
        }

    }, []);

    useEffect(() => {
        
        if(progress >= 100){
            clearInterval(timer)
            updateTickectPurchase();
            
        }else if(progress <= 0 && progress < 99){
            startTiming()
        }

        return ()=> {
            if(progress >= 100){
                clearInterval(timer)
                
            }
        }
        
    }, [progress]);

    return (
        <Timeline height={300} progress={progress}>
            <Bookmark progress={0}>
                <Box
                    color={progress <= 0 ? "gray.100" : "green.300"}
                >
                    <Icon
                        w={7}
                        h={7}
                        as={FaClipboardCheck}
                        mr="2"
                    />
                        Order Confirmed
                </Box>
            </Bookmark>
            <Bookmark progress={50}>
                <Box
                        color={progress >= 50 ? "green.300" : "gray.100"}
                >
                    <Icon
                        w={7} 
                        h={7}
                        as={FaShippingFast}
                        mr="2"
                    />
                        Shipping
                </Box>
            </Bookmark>
            <Bookmark progress={100}>
                <Box
                    color={progress >= 100 ? "green.300" : "gray.100"}
                >
                    <Icon
                        w={7} 
                        h={7}
                        as={FaCheckSquare}
                        mr="2"
                    />
                        Delivered
                </Box>
            </Bookmark>
        </Timeline> 

    )
}

export default TimeLineDelivery;
