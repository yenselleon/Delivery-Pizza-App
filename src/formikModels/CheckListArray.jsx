import React from "react";
import {
        HStack,
        Box,
        Text,
        Button} from '@chakra-ui/react'
import { Formik, Form, FieldArray, useFormikContext } from "formik";
import { v4 as uuidv4} from "uuid"

const initialValues = {
  pizzaList:{ 
    bebidas: [
        /* {
      name: "Coca Cola",
      size: "",
      price: 12,
      quanty: 1,
        } */
    ],
  },
};

const arrayInfo = [
    { id: uuidv4(), name: 'Coca Cola', price: 12,  quanty: 1},
    { id: uuidv4(), name: 'chinoto', price: 15,  quanty: 1}
]

export const CheckArrayList = () => {

    
    const handleQuanty = (form, product )=> {

        const findIndex = form.values.pizzaList.bebidas.findIndex( item => product.id === item.id)

        form.setValues(values => ({
            ...values,
            pizzaList: {
                ...values.pizzaList,
                bebidas: values.pizzaList.bebidas.map(((item, index)=>(
                    
                    (index === findIndex)
                        ?   
                            {
                                ...item,
                                quanty: values.pizzaList.bebidas[index].quanty + 1,
                            }
                        :
                            {
                                ...item
                            }
                        
                )))
            }
        }))

    
    }


    return (

        <div>
            <h1>Add Bebidas</h1>
            <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            >
            {({ values}) => (
                <Form>

                    <FieldArray name="pizzaList.bebidas">
                        {({ insert, remove, push, form }) => (
                            <Box>
                                {arrayInfo.map((item, indexArryInfo) => (
                                
                                    ( values.pizzaList.bebidas.some(product => product.id === item.id)) 
                                    ?
                                        <HStack key={item.id}>
                                            <Text>{item.name}</Text>
                                            <Text>{item.price}$</Text>
                                            <HStack>
                                                <Button>-</Button>
                                                <Text>
                                                    {
                                                        values.pizzaList.bebidas.find(findObject => findObject.id === item.id)["quanty"]
                                                    }
                                                </Text>
                                                <Button
                                                    
                                                    onClick={()=> handleQuanty(form, item)}
                                                >
                                                    +
                                                </Button>
                                            </HStack>
                                        </HStack>
                                    :
                                        <Button
                                            key={item.id}
                                            type="button"
                                            className="secondary"
                                            onClick={() => push(item)}
                                        >
                                            +
                                        </Button>
                                
                                ))}

                            </Box>
                        )}
                    </FieldArray>

                <Button type="submit">submit</Button>
                </Form>
            )}
            </Formik>
        </div>

    )


}

