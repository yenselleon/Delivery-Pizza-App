import { SearchIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useContext, useEffect, useState } from "react";
import { pizzaMenuList } from "../db/menuPizzaList";

import UiItemsContext from "../context/UiItemsContext/UiItemsContext";
import { CloseButton } from "@chakra-ui/close-button";

const InputSearchAutoComplete = () => {
    const { dataItemsMenu, getDataItems, isOpenAndCloseHookSearchInput } = useContext(UiItemsContext);

    const { /* isOpenSearchInput, onOpenSearchInput, */ onCloseSearchInput } = isOpenAndCloseHookSearchInput;


    const {dataItemsPizza} = dataItemsMenu;

    const [search, setSearch] = useState('');

    useEffect(() => {
        //Push data on dataItemsMenu
        getDataItems(pizzaMenuList, "dataItemsPizza");
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      

  return (
    <Stack width={["300px", "350px", "400px", "550px"]} mx="3" position="relative" height="40px" >
      
      <CloseButton 
        color="white" 
        ml="250px" 
        position="absolute" 
        top="-35px" 
        right="0" 
        bg="blackAlpha.400"
        d={["inline", "none"]}
        onClick={()=> {onCloseSearchInput(); setSearch('')} } 
      />
      
      <Flex flexDirection="column" width="100%" position="absolute" bg="white" borderRadius="md">

        <InputGroup maxWidth="100%">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            laceholder="Search your favorite pizza"
            focusBorderColor="brand.base"
            value={search}
            onChange={(e)=> setSearch( e.target.value)}
          />
        </InputGroup>

        {/* Display Data */}
        {
            (search) &&
                <Box
                    width="100%"
                    mt="1"
                    borderWidth="1px"
                    overflow="scroll"
                    overflowX="hidden"
                    maxHeight="200px"
                >

                    {
                        // eslint-disable-next-line array-callback-return
                        dataItemsPizza?.filter((item, index)=> {

                            if(item.title.toLowerCase().includes(search.toLowerCase())){
                                return item;
                            }

                        }).map((items, index)=> (

                            <HStack key={items.id} isTruncated height="auto" width="100%" mb="1">
                                <Image src={items.imageThumbnail} width="50px" height="50px"/>
                                <Text>{items.title}</Text>
                            </HStack>
                        ))
                    }
                    
                </Box>

        }
      </Flex>
    </Stack>
  );
};

export default InputSearchAutoComplete;
