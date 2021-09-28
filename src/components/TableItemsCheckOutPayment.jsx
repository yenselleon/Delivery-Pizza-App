import React from "react";
import {Table,
        Tr,
        Th,
        Thead,
        Tfoot,
        Td,
        Tbody,
        } from '@chakra-ui/react'

const TableItemsCheckOutPayment = ({itemsShoppingCart, totalPriceAndItemsOnCart}) => {

  return (
    <Table variant="unstyled" colorScheme="teal"  mt="1" fontFamily="monospace">
      <Thead>
        <Tr bg="whiteAlpha.600">
          <Th>Pizzas</Th>
          <Th>Items</Th>
          <Th isNumeric>Price</Th>
        </Tr>
      </Thead>

        {
          itemsShoppingCart.map((item,index) => (

            <Tbody key={item.id}>
              <Tr bg="whiteAlpha.300" color="white">
                <Td>{item.title}</Td>
                <Td>{item.itemsCount}</Td>
                <Td isNumeric>{item.total}$</Td>
              </Tr> 
            </Tbody>

          ))
        }
      <Tfoot>
        <Tr bg="whiteAlpha.800">
          <Th>Total</Th>
          <Th isNumeric>{totalPriceAndItemsOnCart.totalItemsOnCart}</Th>
          <Th isNumeric>{totalPriceAndItemsOnCart.totalPriceOnCart}$</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default TableItemsCheckOutPayment;
