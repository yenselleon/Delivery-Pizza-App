import React, { useContext } from "react";
import { Link as LinkRouterDom} from 'react-router-dom';

import { IconButton } from "@chakra-ui/button";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { FaHome, FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";

import { useHistory } from 'react-router-dom';


const MobileBottomNavbar = () => {

    const { itemsShoppingCart,
            isOpenAndCloseHookSearchInput, 
            } = useContext(UiItemsContext);

    const { onOpenSearchInput } = isOpenAndCloseHookSearchInput;
    const history = useHistory();

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      width="inherit"
      display={["flex", "none"]}
    >
      {/* HomePage btn */}
      <Link as={LinkRouterDom} to="/" _hover={{ textDecoration: "none" }}>
        <IconButton
          w="40px"
          h="40px"
          color="whiteAlpha.800"
          fontSize="24px"
          bg={["brand.base"]}
          shadow="dark-lg"
          icon={<FaHome />}
        />
      </Link>

      {/* Search Component Overlay btn */}
      <IconButton
        w="40px"
        h="40px"
        color="whiteAlpha.800"
        fontSize="24px"
        bg={["brand.base"]}
        shadow="dark-lg"
        icon={<FaSearch />}
        onClick={onOpenSearchInput}
      />

      {/* ChechOut btn */}
      <Link
        as={LinkRouterDom}
        to="/checkout"
        _hover={{ textDecoration: "none" }}
      >
        <Box
          position="relative"
          as="button"
          w="40px"
          h="40px"
          color="whiteAlpha.800"
          fontSize="24px"
          bg={["brand.base"]}
          shadow="dark-lg"
          borderRadius="md"
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FaShoppingCart />
          {itemsShoppingCart.length > 0 && (
            <Box
              position="absolute"
              top="-5px"
              right="-4px"
              borderRadius="50%"
              bg="white"
              d="flex"
              justifyContent="center"
              alignItems="center"
              zIndex="popover"
              border="1px solid #e94d51"
              p="2px 6px 2px 7px"
            >
              <Text
                as="span"
                fontSize="10px"
                color="brand.base"
                textAlign="center"
                d="inline"
                margin="0"
                p="0"
                borderRadius="50%"
              >
                {
                  itemsShoppingCart.length <= 9
                    ? itemsShoppingCart.length
                    : "9+"
                }
              </Text>
            </Box>
          )}
        </Box>
      </Link>

      <IconButton
        w="40px"
        h="40px"
        color="whiteAlpha.800"
        fontSize="24px"
        bg={["brand.base"]}
        shadow="dark-lg"
        icon={<FaUserAlt />}
        onClick={
          ()=> history.push('/myAcount')
        }
      />
    </Stack>
  );
};

export default MobileBottomNavbar;
