import React, { useContext, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";


import { Step, Steps } from 'chakra-ui-steps';
import { useParams } from "react-router-dom";
import stepsCheckOut from "../helper/stepsCheckOut";



const CheckOutScreen = () => {
  
  const {step} = useParams();

  
  const { itemsShoppingCart} = useContext(UiItemsContext);
  console.log("render checkOut")
  
  useEffect(() => {

    if(itemsShoppingCart.length > 0){
      localStorage.setItem(
        "itemsShoppingCart",
        JSON.stringify(itemsShoppingCart)
        );

    }
  }, [itemsShoppingCart.length]);
  
  
  return (
    <Container
      maxW={["100%", "100%", "container.lg", "container.lg"]}
      centerContent
      borderWidth="1px"
      borderRadius="lg"
      mt={['0', '3', '5']}
      pt="4"
      bg="white"
    >
      <Steps activeStep={Number(step)} responsive={false} mb="3">
          {stepsCheckOut.map(({ label, content}) => (
            <Step label={label} key={label}>
              {
                content
                
              }
            </Step>
          ))}
      </Steps>


    
    </Container>
  );
};

export default CheckOutScreen;
