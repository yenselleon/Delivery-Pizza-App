/* eslint-disable react/jsx-no-duplicate-props */
import { SmallAddIcon, StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import ModalItemMenuContext from "../context/ModalItemMenuContext/ModalItemMenuContext";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";



const CardItemMenuPizza = (data) => {

    const { onOpenModalCardMenu } = useContext(ModalItemMenuContext);
    const { getItemMenuById } = useContext(UiItemsContext)


    const {
      id, 
      title, 
      ingredient, 
      imageThumbnail, 
      imageAlt, 
      price, 
      rating,
      reviewCount} = data


    console.log('render');
  

  return (
    <Box
      width={["280px", "sm"]}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="1"
      display="flex"
      m="0"
      bg="white"
      height={["130px", "150px"]}
    >
      <Image
        src={imageThumbnail}
        alt={imageAlt}
        maxW={["100px", "150px"]}
        p="1"
        borderRadius="lg"

      />

      <Box p="1"     overflow="hidden" width="100%">
        <Box d="flex" alignItems="baseline" alignItems="center">
          <Badge borderRadius="full" px="2" colorScheme="red">
            Popular
          </Badge>
          <Button 
            maxW="25px"
            maxH="25px"
            p="0"
            m="0"
            borderRadius="lg"
            ml="auto"
            colorScheme="red"
            onClick={()=> {
              getItemMenuById(id);
              onOpenModalCardMenu();
            }}
          >
            <SmallAddIcon />
          </Button>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
        <Box as="span" color="gray.600" fontSize="sm" isTruncated>
          {ingredient}
        </Box>

        <Box>${price[0].price}</Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating ? "red.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(CardItemMenuPizza);
