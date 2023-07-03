import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Flex, ListItem, Text, Box, UnorderedList } from './framework';
import { useTranslation } from 'react-i18next';


const thesis = {
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      // delay: custom * 0.2,
      delayChildren: 0.5, 
      staggerChildren: 0.1,
    } 
  },
  hidden: { opacity: 0, scale: 0, },
  active : { color: '#00b6fe' },
  notActive : { color: '#ffffff' },
};

const thesisDescription = {
  visible: { 
    opacity: [0, 1], 
    rotateX: [-90, 0],  
    scale: [0.5, 1], 
    display: 'block',
    y: [-200, 0],
    transition: { 
      duration: .9, 
      delay: 0.5 
    } 
  },
  hidden: { 
    opacity: [1, 0], 
    scale: [1, 1.4], 
    display: 'none',
    transition: { 
      duration: .9, 
      delay: 0,
      opacity: {duration: .5,}
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

export const Thesis = React.memo<any>(({
  text = 'привет',
  fontSize = 'sm',
  isActive = false,
  onClickActive,
  id,
}:{
  text?: string;
  fontSize?: string;
  isActive?: boolean;
  onClickActive?: (item: any) => any;
  id?: number;
}) => {
  const control = useAnimation();
  const ref = useRef(null);
  // @ts-ignore
  const isInView = useInView(ref);

  const { t } = useTranslation();
  console.log('isActiveT', isActive);

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

  return (
    <Box 
      as={motion.div}
      width='100%'
      transformOrigin='right'
      ref={ref}
      sx={{
        color: isActive ? '#00b6fe' : '#ffffff',
        transition: 'color 1s ease',
      }}
      // ref={ref}
      initial={{color: '#ffffff'}}
      variants={thesis}
      animate={control}
      // custom={i}
      whileTap={{ scale: 1.05, fontWeight: 600 }}
      whileFocus={{ scale: 1.05 }}
      onClick={() => {
        onClickActive && onClickActive({id, isActive});
      }}
    >
      <Container centerContent={false} width='100%' height='100%' py={2} px={4} pos='relative'>
        {/* <ThesisBorder i={i} index={index} /> */}
        <Text fontSize={fontSize} style={{
        }}>{t(text)}</Text>
      </Container>
    </Box>
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

  console.log('isActiveTD', isActive);
  useEffect(() => {
    if (isActive == true) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isActive]);
  // useEffect(() => {
  //   if (isInView && (isActive == true)) {
  //     control.start("visible");
  //   } else if (isActive == true) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, isInView, isActive]);

  return (
    <Box 
      as={motion.div}
      position='absolute'
      top={0}
      initial={{opacity: 0, display: 'none'}}
      ref={ref}
      variants={thesisDescription}
      animate={control}
      {...props}
    >
      <Flex 
        w='100%' 
        h='100%' 
        display={points && 'flex'}
        flexDirection={!!points ? 'column' : 'row'}
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
  )
})
