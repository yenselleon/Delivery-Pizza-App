import React, { useContext, useEffect } from "react";

import {
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
  } from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import {v4 as uuidv4} from 'uuid'
import * as Yup from 'yup';

import SizeComponent from "../modalCartItemComponents/SizeComponent";
import DrinkSectionComponent from "../modalCartItemComponents/DrinkSectionComponent";
import DressingsSectionComponent from "../modalCartItemComponents/DressingsSectionComponent";
import { totalTikectsList } from "../../helper/totalTicketsList";

import ModalItemMenuContext from "../../context/ModalItemMenuContext/ModalItemMenuContext";
import UiItemsContext from "../../context/UiItemsContext/UiItemsContext";

const initialValues = {
    tikectList: {
      pizzas: [],
      drinks: [],
      dressings: [],
      comment: ''
    },
};


const FormModalCardItemMenu = () => {

    const { onClose } = useContext(ModalItemMenuContext);
    const { selectedItem, pushItemToShoppingCart, itemsShoppingCart} = useContext(UiItemsContext);


    const { imageUrl, title, ingredient, imageAlt, price } = !selectedItem
                                                                ? false
                                                                : selectedItem[0];

    const tickectSchema = Yup.object().shape({
        tikectList: Yup.object({
            pizzas: Yup.array().min(1, 'You must choose at least one size'),
            drinks: Yup.array(),
            dressings: Yup.array().max(3, 'You can only choose 3 dressings'),
            comment: Yup.string()
        })
    
    });

    useEffect(() => {
      
      localStorage.setItem('itemsShoppingCart', JSON.stringify(itemsShoppingCart))
      
    }, [itemsShoppingCart])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={tickectSchema}
      onSubmit={async (values) => {
        /* await new Promise((r) => setTimeout(r, 500)); */
        /* alert(JSON.stringify(values, null, 2)); */
        tickectSchema.isValid(initialValues).then(console.log).catch(err => console.log(err))

        const { total, items: itemsTotal } = totalTikectsList({
          ...values.tikectList,
        });

        pushItemToShoppingCart({
          ...values.tikectList,
          id: uuidv4(),
          imageUrl: imageUrl,
          title: title,
          total: total,
          itemsCount: itemsTotal,
        });
        onClose();
      }}
    >
      {({ values, errors, touched  }) => (
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
                    {({ field }) => (
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
                    {({ ...props }) => <SizeComponent {...props} />}
                  </FieldArray>

                  {/* Dressings election section */}

                  <DressingsSectionComponent />

                  {/* Drink election section */}
                  <FieldArray name="tikectList.drinks">
                    {({ ...props }) => <DrinkSectionComponent {...props} />}
                  </FieldArray>
                </Box>
              </Flex>
            </ModalBody>

            <ModalFooter bg="gray.100">
              <Flex mr="auto"  w="auto">
                <Text fontWeight="bold">
                  Total: {totalTikectsList({ ...values.tikectList }).total}
                </Text>
              </Flex>
              <Button type="submit" colorScheme="red" mr={3}>
                Add to Card
              </Button>
            </ModalFooter>
          </ModalContent>
        </Form>
      )}
    </Formik>
  );
};

export default FormModalCardItemMenu;
