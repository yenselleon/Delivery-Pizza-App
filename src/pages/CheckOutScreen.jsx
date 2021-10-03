import React, { useContext, useEffect } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";
import CheckoutListAndPayCard from '../components/CheckoutListAndPayCard'

import { Step, Steps, useSteps } from 'chakra-ui-steps';





const CheckOutScreen = () => {
  
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const { itemsShoppingCart, totalPriceAndItemsOnCart } = useContext(UiItemsContext);
  
  const steps = [
    { label: 'CheckOut', content: <CheckoutListAndPayCard nextStep={nextStep}/>,},
    { label: 'Confirm', content: (<div>hola</div>),},
    { label: 'End', content: (<div>hola</div>),},
  ];


  useEffect(() => {
    localStorage.setItem(
      "itemsShoppingCart",
      JSON.stringify(itemsShoppingCart)
    );
  }, [itemsShoppingCart]);

  

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

      <Steps activeStep={activeStep} responsive={false} >
          {steps.map(({ label, content }) => (
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
