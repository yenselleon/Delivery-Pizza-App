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
import { FieldArray, Form, Formik } from "formik";

import ModalItemMenuContext from "../context/ModalItemMenuContext/ModalItemMenuContext";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";

import IncrementDecrementBtn from "./btns/IncrementDecrementBtn";
import IncrementBtn from "./btns/IncrementBtn";
import SizeComponent from "./modalCartItemComponents/SizeComponent";
import DrinkSectionComponent from "./modalCartItemComponents/DrinkSectionComponent";
import DressingsSectionComponent from "./modalCartItemComponents/DressingsSectionComponent";

const initialValues = {
  tikectList: {
    pizzas: [],
    drinks: [],
    dressings: [],
    comment: ''
  },
};

const ModalCardItemMenu = () => {
  const initialRef = React.useRef();

  const { isOpen, onClose } = useContext(ModalItemMenuContext);
  const { selectedItem } = useContext(UiItemsContext);

  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const { imageUrl, title, ingredient, imageAlt, price } = !selectedItem
                                                                ? false
                                                                : selectedItem[0];

  const handleLoadImage = (...data) => {
    console.log(data);
    setIsLoadingImage(true);
  };
  console.log(isLoadingImage);
  return (
    selectedItem && (
      <Modal
        initialFocusRef={initialRef}
        /* finalFocusRef={finalRef} */
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
        size="6xl"
      >
        <ModalOverlay height="100%" />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            /* alert(JSON.stringify(values, null, 2)); */
            console.log(values)
          }}
        >
          {({ values}) => (
            <Form>

              <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <Divider orientation="horizontal" />

                <ModalBody pb={6}>
                  <Flex direction={["column", "column", "row"]}>
                      {/* Left side */}
                    <Box
                      width={["100", "100", "50%"]}
                      p="2"
                      justifySelf="center"
                      alignSelf={["center", "center", "start"]}
                    >
                      <Image
                        onLoad={handleLoadImage}
                        src={imageUrl}
                        borderRadius="lg"
                        height={["auto", "auto", "280px"]}
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
                      {/* Right side */}
                    <Box width={["100", "100", "50%"]} p="2">
                      <Text fontWeight="bold">${price[0].price}</Text>
                      <Text color="gray.400">
                        <Text as="span" fontWeight="bold">
                          Ingredients:{" "}
                        </Text>
                        {ingredient}
                      </Text>

                      <Divider orientation="horizontal" mt="2" />

                      {/* Size election section */}

                      <FieldArray name="tikectList.pizzas">
                          {({ ...props }) => (
                            
                            <SizeComponent {...props} />
                            
                          )}
                      </FieldArray>

                      {/* Dressings election section */}
                      
                      <DressingsSectionComponent />
                        
                        {/* Drink election section */}
                      <FieldArray name="tikectList.drinks">
                        {({ ...props }) => (
                          
                          <DrinkSectionComponent {...props} />
                          
                        )}
                      </FieldArray>
                      
                    </Box>
                  </Flex>
                </ModalBody>

                <ModalFooter bg="gray.100">
                  <Flex mr="auto" bg="turquoise" w="150px">
                    <IncrementDecrementBtn />
                  </Flex>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Add to Card
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Form>
          )}
        </Formik>
      </Modal>
    )
  );
};

export default ModalCardItemMenu;