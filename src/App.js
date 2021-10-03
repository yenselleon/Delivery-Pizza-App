import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { UiItemsContextProvider } from './context/UiItemsContext/UiItemsContext';
import { ModalItemMenuContextProvider } from './context/ModalItemMenuContext/ModalItemMenuContext';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  components: {
    Steps,
  },
  colors: {
    brand: {
      base: "#E94D51",
      // ...
      900: "#1a202c",
    },
  },
})


function App({ Component, pageProps  }) {

  

  return (
    <ChakraProvider theme={theme}>
      <UiItemsContextProvider>
        <ModalItemMenuContextProvider>

          <Component {...pageProps}/>

        </ModalItemMenuContextProvider>
      </UiItemsContextProvider>
    </ChakraProvider>
  );
}

export default App;
