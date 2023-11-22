import { useAnimation, motion, Variants } from 'framer-motion';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Center, Text, Box, Container } from '../../framework';


const valueVariant: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, }
};

const cardValueVariant: Variants = {
  visible: { opacity: 1, rotateY: 0, transition: { duration: 4 } },
  hidden: { opacity: 0, rotateY: 90 }
};

export const Value = memo(function Value({
  text = 'привет',
  ...props
}:{
  text?: string;
  [key:string]: any;
}) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      style={{background: 'yellow', width: 'max-contain'}}
      ref={ref}
      variants={valueVariant}
      animate={control}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <Center width='100%' height='100%' py={4} px={2}>
        <Text>{text}</Text>
      </Center>
    </motion.div>
  )
})

export const CardValue = memo(function CardValue({
  text,
  ...props
}:{
  text?: string;
  [key:string]: any;
}) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      style={{width: 'max-contain'}}
      ref={ref}
      variants={cardValueVariant}
      animate={control}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      <Container 
        maxW='2xs'
        boxShadow='xs'
        p={8}
        bg='teal.300'
        sx={{
          borderTopLeftRadius: 'md',
          borderTopRightRadius: '2xl',
          borderBottomLeftRadius: '2xl',
          borderBottomRightRadius: 'md',
        }}
      >
        <Text>{text}</Text>
      </Container>
    </motion.div>
  )
})
