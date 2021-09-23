import React, { useContext, useEffect } from "react";
import { Box, Text, Stack, Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { useField } from "formik";
import UiItemsContext from "../../context/UiItemsContext/UiItemsContext";

import { menuDressingsList } from "../../db/menuDressingsList";

const DressingsSectionComponent = () => {
    
  const { dataItemsMenu, getDataItems } = useContext(UiItemsContext);

  /* const { values } = useFormikContext();
  const { pizzaList } = values; */

    useEffect(() => {
        getDataItems(menuDressingsList, "dataItemsDressings");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const { dataItemsDressings } = dataItemsMenu;

    
    const [field] = useField({ name: "tikectList.dressings", type: "checkbox" });

  return (
    <FormControl>
      <FormLabel bg="gray.100" width="100%" p="1">
        Dressings
      </FormLabel>
      <CheckboxGroup>
        <Stack>
            {(!dataItemsDressings) ? (
                <h1>Loading ...</h1>
            ) : (
                <Box>
                    {dataItemsDressings.map((item) => (
    
                        <Flex
                            key={item.id}
                        >
                            <Checkbox {...field} value={item.dressing}>{item.dressing}</Checkbox>
                            <Text as="span" color="gray.400" ml="auto">
                            ${item.price}
                            </Text>
                        </Flex>
    
                    ))}

                </Box>
            )}
          
        </Stack>
      </CheckboxGroup>
    </FormControl>
  );
};

export default DressingsSectionComponent;
