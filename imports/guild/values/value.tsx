import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Center, Text, Stack } from '../../framework';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

export const Value = React.memo<any>(({
  text = 'привет',
  ...props
}:{
  text?: string;
  [key:string]: any;
}) => {
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
      variants={boxVariant}
      animate={control}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <Center width='100%' height='100%' p={4}>
        <Text>{text}</Text>
      </Center>
    </motion.div>
  )
})
