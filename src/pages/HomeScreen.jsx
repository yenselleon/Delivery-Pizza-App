import { Box, Container, Image, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import CardItemMenuPizza from '../components/CardItemMenuPizza'
import pizzaMargarita from "../img/pizza_margarita.jpg"
import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";
import ModalCardItemMenu from '../components/ModalCardItemMenu'
import UiItemsContext from '../context/UiItemsContext/UiItemsContext'


const HomeScreen = () => {

    const {dataItemsMenuPizza, getDataItemsMenu} = useContext(UiItemsContext)

    useEffect(() => {
        
        getDataItemsMenu();
    }, [])
    
    /* const {loading, error, data} = useFetch() */
    const loading = false;

    const data = dataItemsMenuPizza;

    const [pageNumber, setPageNumber] = useState(1);

    const itemsPerPage = 8;
    const lastPagesVisited = pageNumber * itemsPerPage;
    const newPagesVisited = lastPagesVisited - itemsPerPage;

    const displayItems = data?.slice(newPagesVisited, lastPagesVisited);
    

    /* const pageCount = Math.ceil(data?.length / itemsPerPage); */   

    const UpdatePage = (page) => {
        setPageNumber(page);
       
    }


    console.log('render home')
    return (
        <Container 
            bg="turquoise" 
            maxW={["100%", "100%", "container.lg", "container.lg"]}
            height="100vh" 
            centerContent
        >   
            {/* Modal card */}
            <ModalCardItemMenu/>
            
            <Box 
                width={["100vw", "100vw", "inherit", "inherit"]}
                height={["250px", "250px", "300px", "300px"]}
            >
                <Image 
                    objectFit="cover"
                    boxSize="100%"
                    src={pizzaMargarita}
                    alt="Pizza"
                    zIndex="1"
                />
            </Box>

            {/* listado de productos */}
            <Box
                mt="4"
                width={["100vw", "100vw", "inherit", "inherit"]}
                height="inherit"
                bg="white"
            >
                <Wrap justify="center" m="0" bg="white" spacing="4">
                    {
                        loading
                        ? 
                            (
                                <h1>Loading</h1>
                            )
                        : 
                            (
                                displayItems.map( data=>
                                
                                    (
                                        <WrapItem key={data.id} m="0" className="prueba">
                                            <CardItemMenuPizza 
                                                id={data.id}
                                                title={data.title}
                                                url={data.url}
                                                ingredient={data.ingredient}
                                                imageThumbnail={data.imageThumbnail}
                                                imageAlt={data.imageAlt}
                                                price={data.price}
                                                rating={data.rating}
                                                reviewCount={data.reviewCount}
                                            />
                                        </WrapItem>

                                    )
                                   

                                )
                            )
                    }
                    
                </Wrap>

                <Pagination
                    defaultCurrent={0}
                    onChange={UpdatePage}
                    current={pageNumber}
                    total={data?.length}
                    pageSize={itemsPerPage}
                />
            </Box>
        </Container>
    )
}

export default HomeScreen
