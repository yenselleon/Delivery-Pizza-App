import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { Formik, Field, Form } from "formik";
import images from "react-payment-inputs/images";
import { formCreditCard } from "../../styles/components/forms/formCreditCard";
import { Button, Input, Box } from "@chakra-ui/react";

  const initialValues = {
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    holderName: "",
  }

const FormCreditCardCheckuot = ({nextStep}) => {
    
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
      {({setValues}) => (
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
                  />
                )}
              </Field>
            </PaymentInputsWrapper>

            <Button
              mt="1"
              width="30%"
              variant="outline"
              color="white"
              border="0.2rem solid white"
              onClick={()=> {
                setValues(initialValues);
                nextStep();
              }}
            >
              Submit
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
