import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Input,
  FormControl,
  Divider,
  Flex,
  Box,
  Image,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Icon,
  CheckboxGroup,
  Checkbox,
  Textarea,
  Skeleton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import IncrementDecrementBtn from "./btns/IncrementDecrementBtn";
import IncrementBtn from "./btns/IncrementBtn";
import ModalItemMenuContext from "../context/ModalItemMenuContext/ModalItemMenuContext";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";



const ModalCardItemMenu = () => {

    const initialRef = React.useRef()

    const cardItemContent = {
        id: 19,
        imageUrl: "https://i.ibb.co/cLfRFZs/Hawaiian-Pizza-min.jpg",
        imageThumbnail: 'https://i.ibb.co/TLjJ87N/Hawaiian-Pizza-min.jpg',
        imageAlt: "Hawaiian-Pizza",
        title: "Hawaiian Pizza",
        ingredient: "tomato sauce, mozzarella, pineapple, ham",
        price: "10",
        reviewCount: 0,
        rating: 1,
      }

    const { isOpen, onClose} = useContext(ModalItemMenuContext);
    const { selectedItem } = useContext(UiItemsContext);
    
    const [isLoadingImage, setIsLoadingImage] = useState(false)

    const {imageUrl, title, ingredient, imageAlt, price} = (!selectedItem) ? false : selectedItem[0];

    const handleLoadImage = (...data)=> {
        console.log(data)
        setIsLoadingImage(true)
    }
    console.log(isLoadingImage)
  return (
    (selectedItem)
        &&
    <Modal
      initialFocusRef={initialRef}
      /* finalFocusRef={finalRef} */
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior='inside'
      size="6xl"
    >
      <ModalOverlay height="100%"/>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <Divider orientation="horizontal" />

        <ModalBody pb={6}>
            <Flex
                direction={["column", "column", "row"]}
            >
                <Box
                    width={["100", "100","50%"]}
                    p="2"
                    justifySelf="center"
                    alignSelf={["center","center","start"]}
                    
                >
                    <Image
                        onLoad={handleLoadImage}
                        src={imageUrl}
                        borderRadius="lg"
                        height={["auto","auto","280px" ]}
                        alt={imageAlt}
                    />

                    <Textarea
                        /* value={value}
                        onChange={handleInputChange} */
                        placeholder="Here is a sample placeholder"
                        size="sm"
                        resize="none"
                        my="2"
                    />
                </Box>
                <Box
                    width={["100", "100","50%"]}
                    p="2"
                    
                >
                    <Text
                        fontWeight="bold"
                    >
                        ${price[0].price}
                    </Text>
                    <Text
                        color="gray.400"
                    >
                        <Text as="span" fontWeight="bold">Ingredients: </Text>{ingredient}
                    </Text>

                    <Divider orientation="horizontal" mt="2"/>

                    <FormControl
                        isRequired
                    >
                        <FormLabel bg="gray.100" width="100%" p="1">Size</FormLabel>
                            <Stack>
                                {
                                    (!price)
                                        ? 
                                            <h1>Loading ...</h1>
                                        : 
                                            price.map(item=>(
                                                <Flex key={item.size}>
                                                    <Text>{item.size} - <Text as="span">${item.price}</Text></Text>
                                                    <IncrementBtn ml="auto"/>
                                                    {/* <IncrementDecrementBtn ml="auto"/> */}
                                                </Flex>
                                            ))
                                }
                            </Stack>
                    </FormControl>

                    <FormControl>
                        <FormLabel bg="gray.100" width="100%" p="1">Dressings</FormLabel>
                        <CheckboxGroup>
                            <Stack>
                                <Flex>
                                    <Checkbox value="small">Small</Checkbox>
                                    <Text as="span" color="gray.400" ml="auto">$80</Text>
                                </Flex>
                                <Flex>
                                    <Checkbox value="medium">Medium</Checkbox>
                                    <Text as="span" color="gray.400" ml="auto">$80</Text>
                                </Flex>
                                <Flex>
                                    <Checkbox value="big">Big</Checkbox>
                                    <Text as="span" color="gray.400" ml="auto">$80</Text>
                                </Flex>
                            </Stack>
                        </CheckboxGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel bg="gray.100" width="100%" p="1">Drinks</FormLabel>
                            <Stack>
                                <Flex>
                                    <Text>Small - <Text as="span">$80</Text></Text>
                                    <IncrementBtn ml="auto"/>
                                    {/* <IncrementDecrementBtn ml="auto"/> */}
                                </Flex>
                                <Flex>
                                    <Text>Medium - <Text as="span">$80</Text></Text>
                                    <IncrementBtn ml="auto"/>
                                    {/* <IncrementDecrementBtn ml="auto"/> */}
                                </Flex>
                                <Flex>
                                    <Text>Big - <Text as="span">$80</Text></Text>
                                    <IncrementBtn ml="auto"/>
                                    {/* <IncrementDecrementBtn ml="auto"/> */}
                                </Flex>
                            </Stack>
                    </FormControl>

                </Box>
            </Flex>

        </ModalBody>

        <ModalFooter bg="gray.100">
            <Flex mr="auto" bg="turquoise" w="150px">
                <IncrementDecrementBtn />

            </Flex>
          <Button colorScheme="blue" mr={3}>
            Add to Card
          </Button>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCardItemMenu;
