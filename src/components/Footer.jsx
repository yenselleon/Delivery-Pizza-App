import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {

  return (

    <Flex
        display={["none", "flex"]}
        pos={"absolute"}
        width="100%"
        padding="5"
        bg={"brand.base"}
        justifyContent={"center"}
        bottom={"0"}
    >
        <Box
            width={"200px"}
        >
            <Text 
                as="h4" 
                fontSize="sm" 
                fontWeight="bold"
                color={"white"}
                textAlign={"center"}
                marginBottom={"10px"}
            >
                By Yensel Leon
            </Text>

            <Flex
                display={"flex"}
                justifyContent={"space-around"}
            >
                <Box>
                    <Box 
                    as="button"
                    h="10"
                    w="10"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="black"
                    borderRadius="50%"
                    type="button"
                    /* onClick={()=> handleQuanty({form, item, add : true})} */
                    >
                        <Icon as={AiFillGithub} w={7} h={7} color="white" />
                    </Box>
                </Box>

                <Box>
                    <Box 
                    as="button"
                    h="10"
                    w="10"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="black"
                    borderRadius="50%"
                    type="button"
                    /* onClick={()=> handleQuanty({form, item, add : true})} */
                    >
                        <Icon as={AiFillLinkedin} w={7} h={7} color="white" />
                    </Box>
                </Box>

                <Box>
                    <Box 
                    as="button"
                    h="10"
                    w="10"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="black"
                    borderRadius="50%"
                    type="button"
                    /* onClick={()=> handleQuanty({form, item, add : true})} */
                    >
                        <Icon as={AiFillTwitterCircle} w={7} h={7} color="white" />
                    </Box>
                </Box>

            </Flex>
        </Box>
    </Flex>
  );
};

export default Footer;
