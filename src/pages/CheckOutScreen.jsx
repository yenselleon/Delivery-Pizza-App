import React, { useContext, useEffect } from "react";
import { Container  } from "@chakra-ui/react";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";
import CheckoutListAndPayCard from '../components/CheckoutListAndPayCard';
import CardConfirmDataCheckOut from '../components/CardConfirmDataCheckOut';

import { Step, Steps, useSteps } from 'chakra-ui-steps';



const steps = [
  { label: 'CheckOut', content: <CheckoutListAndPayCard />,},
  { label: 'Confirm', content: <CardConfirmDataCheckOut/>,},
  { label: 'End', content: (<div>hola</div>),},
];


const CheckOutScreen = () => {
  
  

  const { itemsShoppingCart, stepsHook} = useContext(UiItemsContext);
  
  const {activeStep} = stepsHook;

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
          {steps.map(({ label, content}) => (
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
