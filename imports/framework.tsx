import { Button, Text, useMediaQuery as useMediaQueryChakra } from '@chakra-ui/react';
export * from '@chakra-ui/react';

import NextLink from 'next/link';
export { NextLink };

import useInterval from "@use-it/interval";
export { useInterval };

import { Card } from './card';
export { Card as GravityCard };

import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import { useEffect, useLayoutEffect, useState } from 'react';
import React from 'react';
export { default as ConfettiExplosion } from '@reonomy/react-confetti-explosion';

export const useMediaQuery = function useMediaQuery(arg) {
  const [actualValue, isBrowser] = useMediaQueryChakra(arg);
  const [value, setValue] = useState(false);
  useEffect(() => setValue(actualValue), [actualValue, isBrowser]);
  return [value, isBrowser];
}

export function ButtonExplotion(props: any) {
  const [exp, setExp] = useState(false);
  return (
    <Button {...props} onClick={(e) => {
      setExp(true);
      setTimeout(() => setExp(false), 1000);
      props?.onClick && props?.onClick(e);
    }} style={{ position: 'relative' }}>
      {!!exp && <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}><ConfettiExplosion {...{
        force: 0.4,
        duration: 2000,
        particleCount: 30,
        floorHeight: 500,
        floorWidth: 300,
        colors: ['#000'],
      }}/></div>}
      {props?.children}
    </Button>
  )
}

export const Typography = React.memo(({children}:{children: any}) => {
  return (<Text>
      {children}
    </Text>
  )
})