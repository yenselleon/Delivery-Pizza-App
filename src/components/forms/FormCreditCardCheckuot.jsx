import React, { useState } from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { Formik, Field, Form } from "formik";
import images from "react-payment-inputs/images";
import { formCreditCard } from "../../styles/components/forms/formCreditCard";
import { Button, Input, Box, Select } from "@chakra-ui/react";
import _ from "lodash";

  const initialValues = {
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    holderName: "",
    country: "",
  }

const FormCreditCardCheckuot = ({nextStep}) => {

  const [randomValues, setRandomValues] = useState(false);
    
    const {
        meta,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        wrapperProps,
        } = usePaymentInputs();


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(data)=> {

        console.log(data)
        nextStep();


      }}
      validate={() => {
        if(randomValues){
          return;
        }
        let errors = {};
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        if (meta.erroredInputs.cvc) {
          errors.cvc = meta.erroredInputs.cvc;
        }
        return errors;
      }}
    >
      {({setValues, ...props}) => (
        <Form >
          <Field name="holderName">
            {({ field }) => (
              <Input
                mt="2"
                color="white"
                _placeholder={{
                  color: "var(--chakra-colors-whiteAlpha-700)",
                }}
                _focus={{ border: "1px solid white" }}
                placeholder="Holder Name"
                type="text"
                autoComplete="false"
                {...field}
              />
            )}
          </Field>
          <Box
            my="2"
            d="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <PaymentInputsWrapper {...wrapperProps} styles={formCreditCard}>
              <svg {...getCardImageProps({ images })} />
              <Field name="cardNumber">
                {({ field }) => (
                  <Input
                    variant="unstyled"
                    {...getCardNumberProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                    value={field.value}
                  />
                )}
              </Field>
              <Field name="expiryDate">
                {({ field }) => (
                  <Input
                    variant="unstyled"
                    {...getExpiryDateProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                    value={field.value}
                    
                  />
                )}
              </Field>
              <Field name="cvc">
                {({ field }) => (
                      <Input
                        variant="unstyled"
                        {...getCVCProps({
                          onBlur: field.onBlur,
                          onChange: field.onChange,
                        })}
                        value={field.value}

                      />

                )}
              </Field>
            </PaymentInputsWrapper>

            <Field name="country">
              {
                (({field})=> (
                  <Select 
                    {...field} 
                    color="white"
                    bg="brand.base"
                    placeholder="Select your country" 
                  >
                    <option style={{color: 'black'}}  value="United State">United State</option>
                    <option style={{color: 'black'}}  value="Canada">Canada</option>
                    <option style={{color: 'black'}}  value="Colombia">Colombia</option>
                    <option style={{color: 'black'}}  value="Peru">Peru</option>
                    <option style={{color: 'black'}}  value="Mexico">Mexico</option>
                    <option style={{color: 'black'}}  value="Spain">Spain</option>
                    <option style={{color: 'black'}}  value="Venezuela">Venezuela</option>
                    <option style={{color: 'black'}}  value="Italy">Italy</option>
                    <option style={{color: 'black'}}  value="Chile">Chile</option>
                  </Select>
                ))
              }
            </Field>

            <Button
              mt="1"
              mb="3"
              width="fit-content"
              variant="outline"
              color="white"
              border="0.2rem solid white"
              size="xs"
              _hover={{
                color: "brand.base",
                background: "white",
                border: "0.2rem solid white",
              }}
              
              onClick={()=> {
                setValues({
                  cardNumber: "4929429464439414",
                  expiryDate: "10/25",
                  cvc: "675",
                  holderName: "Ramon Perez",
                  country: "Venezuela"
                });
                setRandomValues(true);
              }}
            >
              Generate ramdon Number
            </Button>
            

            <Button
              mt="1"
              type="submit"
              width="30%"
              variant="outline"
              color="white"
              border="0.2rem solid white"
              _hover={{
                color: "brand.base",
                background: "white",
                border: "0.2rem solid white",
              }}
              onClick={()=> console.log(props)}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormCreditCardCheckuot;
