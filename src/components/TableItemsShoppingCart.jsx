import React from "react";
import {Table,
        Tr,
        Th,
        Thead,
        Tfoot,
        Td,
        TableCaption,
        Tbody,
        Text,
        } from '@chakra-ui/react'

const TableItemsShoppingCart = ({...item}) => {

  return (
    <Table variant="unstyled" colorScheme="teal"  mt="1">
      <TableCaption><Text as="span" color="gray.400">Comments:</Text> {item.comment}</TableCaption>
      <Thead>
        <Tr bg="gray.300">
          <Th>Pizzas</Th>
          <Th isNumeric>Price</Th>
        </Tr>
      </Thead>

        {
          (item.pizzas.length !== 0) &&
            <Tbody >
              {item.pizzas.map((pizza, index)=> (
              <Tr key={pizza.id}>
                <Td>{pizza.size}</Td>
                <Td isNumeric>{pizza.price}$</Td>
              </Tr> 
              ))}
            </Tbody>
        }
        {
          (item.drinks.length !== 0) &&
            <Tbody >
              <Tr bg="gray.200">
                <Td>Drinks</Td>
                <Td isNumeric>Price</Td>
              </Tr> 
              {item.drinks.map((drink, index)=> (
                <Tr key={drink.id}>
                  <Td>{drink.drink}</Td>
                  <Td isNumeric>{drink.price}$</Td>
                </Tr> 
              ))}
            </Tbody>
        }
        {
          (item.dressings.length !== 0) &&
            <Tbody >
                <Tr bg="gray.200">
                  <Td>Dressings</Td>
                  <Td isNumeric>Price</Td>
                </Tr> 
                {item.dressings.map((dressing, index)=> (
                <Tr key={index}>
                  <Td>{dressing}</Td>
                  <Td isNumeric>1$</Td>
                </Tr> 
                ))}

            </Tbody>
        }
      <Tfoot>
        <Tr bg="gray.400">
          <Th>Total</Th>
          <Th isNumeric>10$</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default TableItemsShoppingCart;
