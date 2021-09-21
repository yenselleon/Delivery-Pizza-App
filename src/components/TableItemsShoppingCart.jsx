import React from "react";
import {Table,
        Tr,
        Th,
        Thead,
        Tfoot,
        Td,
        TableCaption,
        Tbody} from '@chakra-ui/react'

const TableItemsShoppingCart = () => {
  return (
    <Table variant="striped" colorScheme="teal" border="1px solid green" mt="1">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Item</Th>
          <Th isNumeric>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Small</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total</Th>
          <Th isNumeric>10$</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default TableItemsShoppingCart;
