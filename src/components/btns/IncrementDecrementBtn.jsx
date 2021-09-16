import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Icon, Text } from '@chakra-ui/react'
import React, {useEffect} from 'react'

const IncrementDecrementBtn = ({ml,mr, item, form, remove, product}) => {

    //Cantidad solicitada y añadida al state
    const quantyItemAdded = form?.values.tikectList[product].find(findObject => findObject.id === item.id).quanty
    
    //Index del item solicitado
    const findIndex = form?.values.tikectList[product].findIndex( pizza => item.id === pizza.id)

    useEffect(() => {
        //remover del estado del form el item que se encuentra en 0
        if(quantyItemAdded === 0){

            remove(findIndex)
        }

        
    }, [quantyItemAdded, findIndex, remove])

    const handleQuanty = ({form, add, rest} )=> {

        

        form.setValues(values => ({
            ...values,
            tikectList: {
                ...values.tikectList,
                [product]: values.tikectList[product].map(((item, index)=>(
                    //Añadir o quitar
                    (index === findIndex)
                        ?   
                            (add)
                                ?
                                    {
                                        ...item,
                                        quanty: values.tikectList[product][index].quanty + 1
                                    }
                                : (rest) && {
                                    ...item,
                                    quanty: values.tikectList[product][index].quanty - 1
                                }
                        :
                            {
                                ...item
                            }
                        
                )))
            }
        }))
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="beige"
            borderRadius="lg"
            ml={ml}
            mr={mr}
        >
            <Box 
                as="button"
                h="5"
                w="5"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="black"
                borderRadius="50%"
                type="button"
                onClick={()=> handleQuanty({form, item, rest : true})}
            >
                <Icon as={MinusIcon} w={3} h={3} color="white" />
            </Box>
            <Text
                fontWeight="bold"
                mx="2"
            >
                {
                    (form) &&
                        quantyItemAdded
                }
            </Text>

            <Box 
                as="button"
                h="5"
                w="5"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="black"
                borderRadius="50%"
                type="button"
                onClick={()=> handleQuanty({form, item, add : true})}
            >
                <Icon as={AddIcon} w={3} h={3} color="white" />
            </Box>
        </Box>
    )
}

export default IncrementDecrementBtn
