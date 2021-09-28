import React, { useContext, useEffect, useState } from "react";
import { Container, Flex, Icon, Button } from "@chakra-ui/react";
import { Box, Divider, Text } from "@chakra-ui/layout";
import CardItemShoppingCart from "../components/CardItemShoppingCart";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";
import { FaPaypal, FaCreditCard, FaShoppingCart } from "react-icons/fa";
import FormCreditCardCheckuot from "../components/forms/FormCreditCardCheckuot";
import TableItemsCheckOutPayment from "../components/TableItemsCheckOutPayment"


const CheckOutScreen = () => {
  const { itemsShoppingCart, totalPriceAndItemsOnCart } = useContext(UiItemsContext);

  const [payment, setPayment] = useState("creditCard");

  useEffect(() => {
    localStorage.setItem(
      "itemsShoppingCart",
      JSON.stringify(itemsShoppingCart)
    );
  }, [itemsShoppingCart]);

  

  return (
    <Container
      maxW={["100%", "100%", "container.lg", "container.lg"]}
      height="auto"
      centerContent
      borderWidth="1px"
      borderRadius="lg"
      mt="4"
    >
      <Flex
        mt="10"
        flexDirection={["column", "column", "row", "row"]}
        width="100%"
        height="auto"
      >
        <Box width="60%">
          <Text textAlign="center" fontWeight="bold" mb="2">
            Items in Your Cart
          </Text>
          {itemsShoppingCart.map((item, index) => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              p="1"
              mb="2"
              mx="1"
            >
              <CardItemShoppingCart {...item} />
            </Box>
          ))}
        </Box>
        <Box
          width="40%"
          borderRadius="lg"
          mb="2"
          mx="1"
          minHeight="450px"
        >
          <Box
            bg="brand.base"
            borderRadius="lg"
            py="1"
            px="2"
            width="100%"
            minHeight="250px"
            position="sticky"
            top="59"
          >
            <Text textAlign="center" fontWeight="bold" mb="2" color="white">
              Payment Info
            </Text>
            {/* Selection Payment method */}
            <Flex justifyContent="space-around" mt="3">
              <Box
                transition="all ease 0.5s"
                width="45%"
                borderWidth="1px"
                borderRadius="lg"
                borderColor={
                  payment === "creditCard" ? "whiteAlpha.900" : "whiteAlpha.500"
                }
                height="50px"
                display="flex"
                color={payment === "creditCard" ? "white" : "whiteAlpha.700"}
                fontSize="25px"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                onClick={() => setPayment("creditCard")}
              >
                <Icon as={FaCreditCard} />
                <Text fontSize="15px" fontWeight="semibold" ml="2">
                  Creadit Card
                </Text>
              </Box>
              <Box
                transition="all ease 0.5s"
                width="45%"
                borderWidth="1px"
                borderRadius="lg"
                borderColor={
                  payment === "paypal" ? "whiteAlpha.900" : "whiteAlpha.500"
                }
                height="50px"
                display="flex"
                color={payment === "paypal" ? "white" : "whiteAlpha.700"}
                fontSize="25px"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                onClick={() => setPayment("paypal")}
              >
                <Icon as={FaPaypal} />
                <Text fontSize="15px" fontWeight="semibold" ml="1">
                  PayPal
                </Text>
              </Box>
            </Flex>

            <Divider my="3" />

            {/* information about payment */}

            <Box
              display={(itemsShoppingCart.length === 0) ? 'none' : 'initial'}
            >
                
                <TableItemsCheckOutPayment itemsShoppingCart={itemsShoppingCart} totalPriceAndItemsOnCart={totalPriceAndItemsOnCart} />

            </Box>

            <Box
              display={(itemsShoppingCart.length === 0) ? 'block' : 'none'}
              background="whiteAlpha.500"
              py="80px"
            >
                
                <Flex
                    direction="column"
                    justifyContent="center"
                    align="center"
                    color="white"
                >

                    <Icon
                        as={FaShoppingCart}
                        w={8} h={8}
                    />
                    <Text
                        as="span"
                        textAlign="center"
                    >
                        You dont have any product on your cart shopping
                    </Text>

                </Flex>

            </Box>

            <Divider my="3" />

            {/* form credit card */}
            <Box
              display={(itemsShoppingCart.length === 0 || payment === "paypal") ? 'none' : 'block'}
            >

              <FormCreditCardCheckuot />

            </Box>

            <Box
              display={(itemsShoppingCart.length === 0 || payment === "creditCard") ? 'none' : 'flex'}
              justifyContent="center"
              mb="5"
            >

              <Button>Pay {`(${totalPriceAndItemsOnCart.totalPriceOnCart}$)`} with Paypal</Button>

            </Box>

          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default CheckOutScreen;
