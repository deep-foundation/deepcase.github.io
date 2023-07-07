import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Flex, ListItem, Text, UnorderedList } from './framework';


const thesis = {
  show: (custom) => {
    return { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        delay: custom * 0.2,
        // delayChildren: 0.5, 
        staggerChildren: 0.1,
      }
    } 
  },
  hidden: { opacity: 0, scale: 0, },
  active : { color: '#00b6fe' },
  notActive : { color: '#ffffff' },
};

const thesisDescription = {
  visible: { 
    opacity: [0, 0.3, 0.6, 0.9, 1], 
    display: 'block',
    transition: { 
      duration: .5, 
      delay: 0.5 
    } 
  },
  hidden: { 
    opacity: [1, 0.9, 0.6, 0.3, 0], 
    display: 'none',
    transition: { 
      display: { delay: 3 },
      duration: .5, 
      delay: 0,
    } 
  }
};

const drawLine = {
  hidden: { opacity: 0, height: 0 },
  visible: (i) => {
    return {
      zIndex: 3,
      opacity: 1,
      height: '100%',
      transition: {
        height: { delay: 0.5, type: "spring", duration: 1.5, bounce: 0 }
      }
    };
  }
};

const ThesisBorder = React.memo<any>(({
  i,
  index,
}:{
  i?: number;
  index?: number;
}) => {
  const control = useAnimation();

  const activatedRef = useRef(false);
  useEffect(() => {
    if (index === i) {
      activatedRef.current = true;
      control.start("visible");
    } else if(activatedRef.current && index != i) {
      activatedRef.current = false;
      control.start("hidden");
    }
  }, [control, index, i]);

  return(<motion.div
      initial="hidden"
      animate={control}
      variants={drawLine}
      style={{
        position: 'absolute', 
        background: '#00b6fe',
        top: 0, right: -1.9,
        width: 1,
        height: "100%",
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
      }}
    />
  )
})

const transition = {
  transition: { 
    duration: 0.5, 
    delay: 0.2,
    // delayChildren: 0.5, 
    // staggerChildren: 0.1,
  }
}

export const Thesis = React.memo<any>(({
  text = 'привет',
  fontSize = 'sm',
  isActive,
  onClickActive,
  id,
}:{
  text?: string;
  fontSize?: string;
  isActive?: boolean;
  onClickActive?: (id: any) => any;
  id?: number;
}) => {
  const animation = useRef(null);
  const ref = useRef(null);
  // @ts-ignore
  const isInView = useInView(ref);
  const control = useAnimation();

  const { t } = useTranslation();

  useEffect(() => {
    if (isInView) {
      control.start("show");
    } else if (isActive == true) {
      control.start("active");
    } else if (isActive == false) {
      control.start("notActive");
    } else {
      control.start("hidden");
    }
  }, [control, isInView, isActive]);

  return (<AnimatePresence>
      <Box 
        as={motion.div}
        width='100%'
        transformOrigin='right'
        ref={ref}
        // sx={{
        //   color: isActive == true ? '#00b6fe' : '#ffffff',
        //   transition: 'color 1s ease',
        // }}
        // initial={{color: '#ffffff'}}
        variants={thesis}
        animate={control}
        exit='nonActive'
        whileTap={{ scale: 1.05, fontWeight: 600 }}
        whileFocus={{ scale: 1.05 }}
        // onTap={() => isActive && animation.current.play()}
        onClick={() => {
          onClickActive && onClickActive(id);
          console.log('isActive', isActive);
          console.log('id', id);
        }}
        // layout
        // sx={{ color: id }}
        // @ts-ignore
        // transition={{
        //     type: "spring",
        //     stiffness: 350,
        //     damping: 25,
        // }}
      >
        <Container centerContent={false} width='100%' height='100%' py={2} px={4} pos='relative'>
          {/* <ThesisBorder i={i} index={index} /> */}
          <Text fontSize={fontSize} cursor='pointer'>{t(text)}</Text>
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
  const ref = useRef(null);
  // @ts-ignore
  const isInView = useInView(ref);
  const { t } = useTranslation();

  useEffect(() => {
    if (isActive == true) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isActive]);
  // useEffect(() => {
  //   if (isInView) {
  //     control.start("visible");
  //   } else if (isActive == true) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, isActive, isInView]);
  // useEffect(() => {
  //   if (isInView && (isActive == true)) {
  //     control.start("visible");
  //   } else if (isActive == true) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, isInView, isActive]);

  return (<AnimatePresence>
      <Box 
        as={motion.div}
        position='absolute'
        height='100%'
        top={0}
        initial={{opacity: 0, display: 'none'}}
        ref={ref}
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
          {<Text fontSize={fontSize}>
            {t(description)}
          </Text>}
          {!!points && <UnorderedList pt='3'>
            {points.map(point => (
              <ListItem key={point.id} fontSize='md'>{t(point.text)}</ListItem>
            ))}
          </UnorderedList>}
        </Flex>
      </Box>
    </AnimatePresence>
  )
})
