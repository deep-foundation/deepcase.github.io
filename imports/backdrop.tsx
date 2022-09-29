import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Portal, useOutsideClick } from '../imports/framework';


const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 2
}

const backdrop = {
  active: {
    scale: 1,
    opacity: 1,
    transition: spring 
  },
  inactive: {
    scale: 0,
    opacity: 0,
    transition: spring 
  }
}

export const Backdrop = React.memo<any>(({
  Provider,
  PortalProps,
  ComponentProps,
  PortalComponent = Portal,
  Component = Center,
  portalOpen = true, 
  onClosePortal,
  animationVariants = backdrop,
  refModal,
  children,
}:{
  Provider?: any;
  PortalProps?: any;
  ComponentProps?: any;
  PortalComponent?: any;
  Component?: any;
  portalOpen?: boolean; 
  onClosePortal: () => any;
  animationVariants?: any;
  refModal: any;
  children?: any;
}) => {
  const { t } = useTranslation();
  const control = useAnimation();
  
  useOutsideClick({
    ref: refModal,
    handler: onClosePortal,
  })

  useEffect(() => {
    if (portalOpen === true) {
      control.start("active"); 
    } else {
      control.start("inactive");
    }
  }, [control, portalOpen]);

  return (
    <PortalComponent {...PortalProps}>
      <Component 
        as={motion.div}
        animate={control}
        variants={animationVariants}
        width='100vw' 
        height='100vh'
        position='fixed'
        background='#FFA99C'
        top={0}
        left={0}
        zIndex={3}
        backdropFilter='
          blur(2px) 
          contrast(1.2)
        '
        backdropInvert='25%'
        onClick={onClosePortal}
        {...ComponentProps}
      >{children}</Component>
    </PortalComponent>
    )
  })