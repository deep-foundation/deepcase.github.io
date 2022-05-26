import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import VisibilitySensor from 'react-visibility-sensor';
import { Box } from '../framework';


const ParticlesComponent = dynamic(
  () => import("./particles").then((m) => m.ParticlesComponent),
  { ssr: false }
);

export const ParticlesButton = React.memo(({
  children,
  options = {},
  styleProps,
}:{
  children: any;
  options?: any;
  styleProps?: any;
}) => {
  const { t } = useTranslation();
  const pRef = useRef<any>();
  const eRef = useRef();
  const sRef = useRef(false);
  const promiseRef = useRef<Promise<boolean>>();

  async function onChange (isVisible) {
    console.log('onChange', 'isVisible', isVisible, 'sRef', sRef.current);
    if (isVisible) {
      console.log(1, 'isVisible', isVisible, 'sRef', sRef.current);
      await promiseRef.current;
      console.log(2, 'isVisible', isVisible, 'sRef', sRef.current);
      if (sRef.current) return;
      sRef.current = true;
      promiseRef.current = new Promise((res, rej) => {
        pRef?.current?.integrate({
          direction: 'right',
          easing: 'easeOutSine',
          duration: 500,
          particlesAmountCoefficient: 7,
          speed: 3,
          oscillationCoefficient: 1
          // duration: 500,
          //   easing: 'easeOutQuad',
          //   speed: .1,
          //   particlesAmountCoefficient: 10,
          //   oscillationCoefficient: 80
          // size: 4,
          // color: '#00a9f3',
          // duration: 1200,
          // easing: 'easeInCubic',
          // particlesAmountCoefficient: 8,
          // speed: 0.4,
          // oscillationCoefficient: 1
        });
        setTimeout(() => {
          console.log(3, 'isVisible', isVisible, 'sRef', sRef.current);
          res(true);
        }, 4000);
      });
    } else {
      console.log(4, 'isVisible', isVisible, 'sRef', sRef.current);
      await promiseRef.current;
      console.log(5, 'isVisible', isVisible, 'sRef', sRef.current);
      if (!sRef.current) return;
      sRef.current = false;
      promiseRef.current = new Promise((res, rej) => {
        pRef.current.disintegrate();
        setTimeout(() => {
          console.log(6, 'isVisible', isVisible, 'sRef', sRef.current);
          res(true);
        }, 4000);
      });
    }
  }

  return (
    <VisibilitySensor onChange={onChange}>
      <Box
        w='max-content'  //{{sm: '100%', md: '50%'}} 
        position="relative"
        bg="transparent"
        borderRadius='lg'
      >
        <ParticlesComponent
          // @ts-ignore
          pRef={pRef} eRef={eRef} options={options}
        >
          <Box
            ref={eRef}
            // as='a' href='https://discord.gg/RD8wFKtujH' 
            // target='_blank'
            borderRadius='md' 
            bg="#00a9f3"
            w='max-content'
            height='90px'
            transform='translateX(-101%)'
            pt='1em'
            pb='1.3em'
            px='3em'
            {...styleProps}
          >
            {children}
          </Box>
        </ParticlesComponent>
      </Box>
    </VisibilitySensor>
  );
});
