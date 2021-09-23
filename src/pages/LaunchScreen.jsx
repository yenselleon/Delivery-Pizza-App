import React, { useState } from "react";
import { Box, Flex, Image, Text, keyframes, ButtonGroup, Button } from "@chakra-ui/react";
import pizzaPng from "../img/pizza.png";



const LaunchScreen = () => {
  const [state, setState] = useState(0)

  const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
  console.log(state);
  const increment = ()=> {
    setState(state => state + 1);
  }
  return (
    <Flex direction={["column", "column", "row"]}>
      <Box
        display="flex"
        justifyContent="center" 
        alignItems="center"
        height={["300", "300", "100vh", "100vh"]}
        
        bg="brand.base"
        width={[
          "100%", // base
          "100%", // 480px upwards
          "50%", // 768px upwards
          "50%", // 992px upwards
        ]}
      >
        <Image
          animation={`${spin} infinite 20s linear`}
          borderRadius="full"
          boxSize="250px"
          src={pizzaPng}
          alt="Pizza"
          mt={["80", "80", "0", "0"]}
          zIndex="1"
        />

      </Box>

      <Box 
            height={["xl", "xl", "100vh", "100vh"]}
            bg="white" 
            display="flex"
            justifyContent="center" 
            alignItems="center"
            width={[
                "100%", // base
                "100%", // 480px upwards
                "50%", // 768px upwards
                "50%", // 992px upwards
            ]}
            zIndex="1000"
        >
        {/* button and commments */}
        <Box >
          <Text 
            mt="2" textAlign="center" 
            fontWeight="bold" 
            fontSize="lg" 
            color="#E94D51"
          >
            Fast Delivery
          </Text>
          <Text 
            mt="3" 
            textAlign="center" 
            color="gray.500" 
          >
            Fast delivery to your home, office o wherever you are
          </Text>

          <ButtonGroup mt="10" display="flex" alignItems="center" flexDirection="column" spacing="0">
            <Button color="white" bg="brand.base" width="50%" >Login</Button>
            <Button mt="3" width="50%" onClick={increment}>Create Account</Button>
          </ButtonGroup>
          {state}
        </Box>

      </Box>
    </Flex>
  );
};

export default LaunchScreen;
