import { Container } from '@chakra-ui/layout';
import React from 'react'
import CardConfirmDataCheckOut from '../components/CardConfirmDataCheckOut';

const ProffScreen = () => {
    return (
        <>
            <Container
                maxW={["100%", "100%", "container.lg", "container.lg"]}
                bg="gray.100"
                d="flex"
                justifyContent="center"
                py="5"
            >

                <CardConfirmDataCheckOut/>

            </Container>

        </>
    )
}

export default ProffScreen;
