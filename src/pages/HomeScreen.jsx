import { Box, Container, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import CardItemMenuPizza from "../components/CardItemMenuPizza";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import ModalCardItemMenu from "../components/ModalCardItemMenu";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";
import { pizzaMenuList } from "../db/menuPizzaList";
import CarrouselSlider from "../components/CarrouselSlider";

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
      maxW={["100%", "100%", "container.lg", "container.lg"]}
      height="auto"
      centerContent
      p="0"
    >
      {/* Modal card */}
      <ModalCardItemMenu />

      <Box
        width={["100%", "100%", "inherit", "inherit"]}
        height={["250px", "250px", "300px", "300px"]}
        overflow="hidden"
      >
        <CarrouselSlider/>
      </Box>

      {/* listado de productos */}
      <Box
        width="100%"
        height="inherit"
        bg="white"
        d="flex"
        flexDirection="column"
        alignItems="center"
        padding="20px 0px 10px 0px"
      >
        <Wrap justify="center" m="0" bg="white" spacing={["2", "2", "2", "4"]} width={["min-content", "min-content", "90%"]}>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            displayItems.map((dataPizza) => (
              <WrapItem key={dataPizza.id} m="0" mb="2" className="prueba">
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
          style={{margin: "25px 0px"}}
        />
      </Box>
    </Container>
  );
};

export default HomeScreen;
