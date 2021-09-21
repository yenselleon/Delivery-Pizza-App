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
  Divider,
  Flex,
  Box,
  Image,
  Text,
  Textarea,
  Skeleton,
} from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import {v4 as uuidv4} from 'uuid'

import ModalItemMenuContext from "../context/ModalItemMenuContext/ModalItemMenuContext";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";

import IncrementDecrementBtn from "./btns/IncrementDecrementBtn";
import SizeComponent from "./modalCartItemComponents/SizeComponent";
import DrinkSectionComponent from "./modalCartItemComponents/DrinkSectionComponent";
import DressingsSectionComponent from "./modalCartItemComponents/DressingsSectionComponent";

const initialValues = {
  tikectList: {
    id: uuidv4(),
    pizzas: [],
    drinks: [],
    dressings: [],
    comment: ''
  },
};

const ModalCardItemMenu = () => {
  const initialRef = React.useRef();

  const { isOpen, onClose } = useContext(ModalItemMenuContext);
  const { selectedItem, pushItemToShoppingCart, itemsShoppingCart } = useContext(UiItemsContext);


  const { imageUrl, title, ingredient, imageAlt, price } = !selectedItem
                                                                ? false
                                                                : selectedItem[0];
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
            pushItemToShoppingCart({...values.tikectList, imageUrl: imageUrl, title: title})
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
                        src={imageUrl}
                        borderRadius="lg"
                        height={["auto", "auto", "280px"]}
                        alt={imageAlt}
                      />
                      {/* Seccion de comentarios adicionales */}
                      <Field name="tikectList.comment">
                        {({field})=> (
                          <Textarea
                            type="text"
                            placeholder="Aditional comment"
                            size="sm"
                            resize="none"
                            my="2"
                            {...field}
                          />

                        )}
                      </Field>
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
