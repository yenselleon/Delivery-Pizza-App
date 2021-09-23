import React, { useContext, useEffect } from "react";
import { Box, Text, Stack, Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import UiItemsContext from "../../context/UiItemsContext/UiItemsContext";

import IncrementDecrementBtn from "../btns/IncrementDecrementBtn";
import IncrementBtn from "../btns/IncrementBtn";
import { drinksMenuList } from "../../db/menuDrikList";

const DrinkSectionComponent = (props) => {

    
  const { push } = props;

  const { dataItemsMenu, getDataItems } = useContext(UiItemsContext);

  const { values } = useFormikContext();
  const { tikectList } = values;

  useEffect(() => {
    getDataItems(drinksMenuList, "dataItemsDrinks");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { dataItemsDrinks } = dataItemsMenu;

  return (
    <FormControl>
      <FormLabel bg="gray.100" width="100%" p="1">
        Drinks
      </FormLabel>
      <Stack>
        {(!dataItemsDrinks) ? (
          <h1>Loading ...</h1>
        ) : (
          <Box>
            {dataItemsDrinks.map((item) => (
              <Flex key={item.id}>
                <Text>
                  {item.drink} - <Text as="span">${item.price}</Text>
                </Text>
                {( tikectList.drinks.some(product => product.id === item.id)) 
                  ?
                      <IncrementDecrementBtn 
                          ml="auto"
                          item={item}
                          product={'drinks'}
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
  );
};

export default DrinkSectionComponent;
