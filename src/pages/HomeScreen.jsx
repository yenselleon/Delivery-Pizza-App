import { Box, Container, Image, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import CardItemMenuPizza from "../components/CardItemMenuPizza";
import pizzaMargarita from "../img/pizza_margarita.jpg";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import ModalCardItemMenu from "../components/ModalCardItemMenu";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";
import { pizzaMenuList } from "../db/menuPizzaList";

const HomeScreen = () => {
  const { dataItemsMenu, getDataItems } = useContext(UiItemsContext);

  useEffect(() => {
    //Push data on dataItemsMenu
    getDataItems(pizzaMenuList, "dataItemsPizza");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const {loading, error, data} = useFetch() */
  const loading = false;

  //Obtener data, la misma viene en una array que contiene varias opciones
  const { dataItemsPizza: dataPizza } = dataItemsMenu;

  const [pageNumber, setPageNumber] = useState(1);

  const itemsPerPage = 8;
  const lastPagesVisited = pageNumber * itemsPerPage;
  const newPagesVisited = lastPagesVisited - itemsPerPage;

  const displayItems = dataPizza?.slice(newPagesVisited, lastPagesVisited);

  /* const pageCount = Math.ceil(data?.length / itemsPerPage); */

  const UpdatePage = (page) => {
    setPageNumber(page);
  };

  console.log("render home");
  return (
    <Container
      bg="turquoise"
      maxW={["100%", "100%", "container.lg", "container.lg"]}
      height="100vh"
      centerContent
      border="1px solid red"
    >
      {/* Modal card */}
      <ModalCardItemMenu />

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
          {loading ? (
            <h1>Loading</h1>
          ) : (
            displayItems.map((dataPizza) => (
              <WrapItem key={dataPizza.id} m="0" className="prueba">
                <CardItemMenuPizza {...dataPizza} />
              </WrapItem>
            ))
          )}
        </Wrap>

        <Pagination
          defaultCurrent={0}
          onChange={UpdatePage}
          current={pageNumber}
          total={dataPizza?.length}
          pageSize={itemsPerPage}
        />
      </Box>
    </Container>
  );
};

export default HomeScreen;
