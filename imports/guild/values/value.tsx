import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Center, Text, Stack } from '../../framework';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

export const Value = React.memo<any>(({text = 'привет'}:{text?: string;}) => {
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
      style={{background: 'yellow', marginBottom: '10rem'}}
      ref={ref}
      variants={boxVariant}
      animate={control}
      whileHover={{ scale: 1.1 }}
    >
      <Center width='5rem' height='5rem'>
        <Text>{text}</Text>
      </Center>
    </motion.div>
  )
})

export const ValuesGrid = React.memo<any>(() => {
  const { t } = useTranslation();
  return (<Stack spacing={6} direction={{sm: 'column', md: 'row'}}>
      <Value text={t('guild--publicity')} />
      <Value text={t('guild--binary_trust')} />
      <Value text={t('guild--atomic_responsibility')} />
      <Value text={t('guild--counseling')} />
    </Stack>
  )
})