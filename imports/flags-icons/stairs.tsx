import { motion, MotionValue, useMotionTemplate, useTransform } from 'framer-motion';
import React from 'react';
import { Box, Img } from '../framework';


export const Stairs = React.memo(({xM, yM}:{xM: MotionValue; yM: MotionValue;}) => {
  const xTower = useTransform(xM, (x: number) => x / 12);
  const yTower = useTransform(yM, (y: number) => (y / 12) * 0.1);
  const _tower = useMotionTemplate`translate3d(${xTower}px, ${yTower}px, 0)`;

  //right
  const x1 = useTransform(xM, (x: number) => (Math.abs(x) / 8) * 1.5);
  const y1 = useTransform(yM, (y: number) => (y / 8) * 0.1);
  const _one = useMotionTemplate`translate3d(${x1}px, ${y1}px, 0)`;

  const x2 = useTransform(xM, (x: number) => (Math.abs(x) / 9) * -1.5);
  const y2 = useTransform(yM, (y: number) => (y / 6) * 0.1);
  const _two = useMotionTemplate`translate3d(${x2}px, ${y2}px, 0)`;

  //right
  const x3 = useTransform(xM, (x: number) => (Math.abs(x) / 4) * 1.5);
  const y3 = useTransform(yM, (y: number) => (y / 4) * 0.1);
  const _three = useMotionTemplate`translate3d(${x3}px, ${y3}px, 0)`;

  const x4 = useTransform(xM, (x: number) => (Math.abs(x) / 8) * -1.5);
  const y4 = useTransform(yM, (y: number) => (y / 2) * 0.1);
  const _four = useMotionTemplate`translate3d(${x4}px, ${y4}px, 0)`;
  

  return (<Box pos='relative' w={150} h={150}>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _tower}}>
        <Img src='./stairs/stairs.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _one}}>
        <Img src='./stairs/1.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _two}}>
        <Img src='./stairs/2.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _four}}>
        <Img src='./stairs/3.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _three}}>
        <Img src='./stairs/4.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _one}}>
        <Img src='./stairs/5.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _two}}>
        <Img src='./stairs/6.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _four}}>
        <Img src='./stairs/7.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _three}}>
        <Img src='./stairs/8.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
      <motion.div style={{position: 'absolute', top: 0, left: 0, transform: _four}}>
        <Img src='./stairs/9.svg' alt='stairs' htmlWidth='100%' htmlHeight='100%' boxSize='150px' />
      </motion.div>
    </Box>
  )
})
