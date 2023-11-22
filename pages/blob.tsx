import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState, memo, useCallback } from 'react';
import { Box } from '../imports/framework';
import { Provider } from '../imports/provider';
import { coreTheme } from '../imports/theme/build';

import { useScroll } from 'framer-motion';
import { MotionModal } from '../imports/motion-modal';
import { Blob } from '../imports/form-blob';
import { InvitationToTheCave } from '../imports/invitation-to-the-cave';
// import { motion, useScroll } from "framer-motion";


export default function Page () {
  return (
    <ChakraProvider theme={coreTheme}>
      <Provider>
        <PageContent />
      </Provider>
    </ChakraProvider>
  );
};

export const PageContent = memo(() => {

  const { scrollY } = useScroll();
  const [ contentReplacement, setContentReplacement ] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest)
    })
  }, [])

  const onCloseModal = useCallback(() => setOpenModal(!openModal), [openModal]);
  
  return (<Box as='main' pos='relative' w='100vw'>
      <MotionModal
        portalOpen={openModal} 
        onClosePortal={onCloseModal}
      >
        <Blob contentReplacement={contentReplacement}>
          <InvitationToTheCave
            boxProps={{display: "flex", alignItems: "center"}}
            contentReplacement={contentReplacement}
            setContentReplacement={() => setContentReplacement(!contentReplacement)}
            onSubmit={() => setContentReplacement(false)}
          />
        </Blob>
      </MotionModal>
    </Box>
  );
});