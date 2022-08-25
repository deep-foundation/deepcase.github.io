import { motion, useAnimation } from 'framer-motion';
import { t } from 'i18next';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Flex, ListItem, Text, UnorderedList } from './framework';


const thesis = {
  show: (custom) => {
    return { 
      // delay, 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        delay: custom * 0.2,
        // delayChildren: 0.5 
      } 
    }
  },
  hidden: { opacity: 0, scale: 0, }
};

const thesisDescription = {
  visible: i => ({ 
    opacity: [0, 1], 
    rotateX: [-90, 0],  
    scale: [0.5, 1], 
    display: 'block',
    y: [-200, 0],
    transition: { 
      duration: .9, 
      delay: 0.5 
    } 
  }),
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

const ThesisBorder = React.memo(({
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
  }, [control, index]);

  return(<motion.div 
      initial="hidden"
      animate={control}
      variants={drawLine}
      style={{
        position: 'absolute', 
        background: '#00b6fe',
        top: 0, right: -1.9,
        width: 4,
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
  i,
  fontSize = 'sm',
  index,
  ...props
}:{
  text?: string;
  i?: number;
  fontSize?: string;
  index?: number;
  [key:string]: any;
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      style={{
        width: '100%',
        transformOrigin: 'right',
        // zIndex: 3,
        color: index === i ? '#00b6fe' : '#ffffff',
        transition: 'color 1s ease',
      }}
      ref={ref}
      variants={thesis}
      animate={control}
      custom={i}
      whileTap={{ scale: 1.05, fontWeight: 'bold' }}
      whileFocus={{ scale: 1.05 }}
      {...props}
    >
      <Container centerContent={false} width='100%' height='100%' py={2} px={4} pos='relative'>
        <ThesisBorder i={i} index={index} />
        <Text fontSize={fontSize} style={{
        }}>{text}</Text>
      </Container>
    </motion.div>
  )
})

export const ThesisDescription = React.memo<any>(({
  item,
  i,
  index,
  fontSize = 'lg',
  ...props
}:{
  item: {
    title?: string;
    text: string;
    points?: {
      id: number;
      text: string;
    }[];
  };
  i: number;
  index?: number;
  fontSize?: string;
  [key:string]: any;
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const activatedRef = useRef(false);
  useEffect(() => {
    if (index === i) {
      activatedRef.current = true;
      control.start("visible");
    } else if(activatedRef.current && index != i) {
      activatedRef.current = false;
      control.start("hidden");
    }
  }, [control, index]);

  return (
    <motion.div
      style={{opacity: 0, display: 'none'}}
      ref={ref}
      custom={i}
      variants={thesisDescription}
      animate={control}
      {...props}
    >
      <Flex 
        w='100%' 
        h='100%' 
        display={!!item.points && 'flex'}
        flexDirection={!!item.points ? 'column' : 'row'}
      >
        {<Text fontSize={fontSize}>
          {t(item.text)}
        </Text>}
        {!!item.points && <UnorderedList pt='3'>
          {item.points.map(point => (
            <ListItem key={point.id} fontSize='md'>{t(point.text)}</ListItem>
          ))}
        </UnorderedList>}
      </Flex>
    </motion.div>
  )
})
