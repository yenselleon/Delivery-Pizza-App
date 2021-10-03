import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,  
} from "@chakra-ui/react";


import ModalItemMenuContext from "../context/ModalItemMenuContext/ModalItemMenuContext";
import UiItemsContext from "../context/UiItemsContext/UiItemsContext";
import FormModalCardItemMenu from "./forms/FormModalCardItemMenu";

const ModalCardItemMenu = () => {
  const initialRef = React.useRef();

  const { isOpen, onClose } = useContext(ModalItemMenuContext);
  const { selectedItem, } = useContext(UiItemsContext);

    
  return (
    selectedItem && (
      <Modal
        initialFocusRef={initialRef}
        /* finalFocusRef={finalRef} */
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
        size="6xl"
      >
        <ModalOverlay height="100%" width="100%"/>
        <FormModalCardItemMenu/>
      </Modal>
    )
  );
};

export default ModalCardItemMenu;
