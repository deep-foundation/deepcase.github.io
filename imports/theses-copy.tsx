import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Flex, ListItem, Text, UnorderedList } from './framework';


const thesisTransition = {
  transition: { type: "spring", duration: 2, bounce: 0 }
};

const thesis = {
  active : { color: '#00b6fe', scale: 1.05, thesisTransition, },
  notActive : { color: '#ffffff', scale: 1, thesisTransition, },
};

const thesisDescription = {
  visible: { 
    opacity: [0, 1], 
    display: 'block',
    scale: 1,
    x: '0%',
    transition: { 
      duration: .5, 
    } 
  },
  hidden: { 
    opacity: [1, 0], 
    display: 'none',
    scale: 0.5,
    x: '100%',
    transition: { 
      display: { delay: 0.3 },
      duration: .5,
    } 
  }
};

const drawLine = {
  hidden: { 
    opacity: 0, 
    height: '0%',
    originY: 1,
    transition: {
      height: { delay: 0.2, type: "spring", duration: 1.5, bounce: 0 } ,
      opacity: { delay: 0.3 } 
    }
  },
  visible: {
    zIndex: 3,
    opacity: 1,
    originY: 0,
    height: '100%',
    transition: {
      height: { delay: 0.2, type: "spring", duration: 1.5, bounce: 0 }
    }
  },
};

const ThesisBorder = React.memo<any>(({
  isActive,
}:{
  isActive?: boolean;
}) => {
  const control = useAnimation();

  useEffect(() => {
    if (isActive == true) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isActive]);

  return(<AnimatePresence>
      <Box as={motion.div}
        animate={control}
        variants={drawLine}
        exit='hidden'
        style={{
          position: 'absolute', 
          background: '#00b6fe',
          top: 0, right: '-0.07rem',
          width: '0.25rem',
          borderRadius: 2,
        }}
      />
    </AnimatePresence>
  )
})

export const Thesis = React.memo<any>(({
  text = 'привет',
  textStyle = 'Medium16',
  isActive,
  onClickActive,
  id,
}:{
  text?: string;
  textStyle?: string;
  isActive?: boolean;
  onClickActive?: (id: any) => any;
  id?: number;
}) => {
  const control = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (isActive == true) {
      control.start("active");
    } else {
      control.start("notActive");
    } 
  }, [isActive]);

  return (<AnimatePresence>
      <Box 
        as={motion.div}
        width='100%'
        transformOrigin='center'
        onClick={() => {
          onClickActive && onClickActive(id);
        }}
        >
        <Container centerContent={false} width='100%' height='100%' py={2} px={4} pos='relative'>
          <ThesisBorder isActive={isActive} />
          <Text as={motion.h4} 
            whileTap={{ scale: 1.05, transition: { type: "spring", duration: 1, bounce: 0 } }}
            whileHover={{ scale: 1.05, transition: { type: "spring", duration: 1, bounce: 0 } }}
            initial={{color: '#ffffff'}}
            variants={thesis}
            animate={control}
            exit='nonActive' textStyle={textStyle} cursor='pointer'
          >{t(text)}</Text>
        </Container>
      </Box>
    </AnimatePresence>
  )
})

export const ThesisDescription = React.memo<any>(({
  fontSize = 'lg',
  description,
  points,
  isActive = false,
  ...props
}:{
  fontSize?: string;
  description: string;
  points?: {
    id: number;
    text: string;
  }[];
  isActive?: boolean;
  [key:string]: any;
}) => {
  const control = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (isActive == true) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isActive]);

  return (<AnimatePresence>
      <Box 
        as={motion.div}
        position='absolute'
        height='100%'
        layout
        top={0}
        initial={{opacity: 0, display: 'none'}}
        variants={thesisDescription}
        animate={control}
        exit='hidden'
        {...props}
      >
        <Flex 
          w='100%' 
          h='100%' 
          display={points && 'flex'}
          flexDirection={!!points ? 'column' : 'row'}
          alignItems='center'
          justifyContent='center'
        >
          {<Text textStyle='Regular16'>
            {t(description)}
          </Text>}
          {!!points && <UnorderedList pt='3'>
            {points.map(point => (
              <ListItem key={point.id} textStyle='Regular16'>{t(point.text)}</ListItem>
            ))}
          </UnorderedList>}
        </Flex>
      </Box>
    </AnimatePresence>
   
  )
})
