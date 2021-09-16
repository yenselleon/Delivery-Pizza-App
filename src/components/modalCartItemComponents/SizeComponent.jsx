import React, { useContext } from "react";
import { Button } from '@chakra-ui/button'
import { Box, HStack, Text, Stack, Flex} from '@chakra-ui/layout'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { FieldArray, useFormikContext } from 'formik'
import UiItemsContext from "../../context/UiItemsContext/UiItemsContext";



import IncrementDecrementBtn from "../btns/IncrementDecrementBtn";
import IncrementBtn from "../btns/IncrementBtn";

const SizeComponent = (props) => {

    const {remove, push, form} = props;

    const {values} = useFormikContext();
    const { tikectList } = values;

  const { selectedItem } = useContext(UiItemsContext);
  const { price: pricePizza} = !selectedItem
                                    ? false
                                    : selectedItem[0];



    return (
        <FormControl isRequired>
            <FormLabel bg="gray.100" width="100%" p="1">
            Size
            </FormLabel>
            <Stack>
            {!pricePizza ? (
                <h1>Loading ...</h1>
            ) : (
                
                <Box>
                    
                    {pricePizza.map((item) => (
                    <Flex key={item.size}>
                        <Text>
                        {item.size} - <Text as="span">${item.price}</Text>
                        </Text>

                        {( tikectList.pizzas.some(product => product.id === item.id)) 
                            ?
                                <IncrementDecrementBtn 
                                    ml="auto"
                                    item={item}
                                    product={'pizzas'}
                                    {...props}
                                />
                                
                            :
                                <IncrementBtn 
                                    ml="auto" 
                                    type="button"
                                    item={item}
                                    pushItemOnclick={push}
                                />
                        }
                    </Flex>
                    ))}

                </Box>

            )}
            </Stack>
        </FormControl>

    )
}

export default SizeComponent;
