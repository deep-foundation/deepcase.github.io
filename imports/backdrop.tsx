import { AnimatePresence, Variants, motion, useAnimation } from 'framer-motion';
import { forwardRef, memo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Portal, useOutsideClick } from '../imports/framework';


const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 2
}

const backdrop: Variants = {
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

export const Backdrop = memo(({
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
      <AnimatePresence>
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
          exit='inactive'
          backdropFilter='
            blur(2px) 
            contrast(1.2)
          '
          backdropInvert='25%'
          onClick={onClosePortal}
          {...ComponentProps}
        >{children}</Component>
      </AnimatePresence>
    </PortalComponent>
    )
  })

export const BackdropForward = forwardRef<any, {
  PortalProps?: any;
  ComponentProps?: any;
  PortalComponent?: any;
  Component?: any;
  portalOpen?: boolean; 
  onClosePortal: () => any;
  animationVariants?: any;
  children?: any;
}>(({
  PortalProps,
  ComponentProps,
  PortalComponent = Portal,
  Component = Center,
  portalOpen = true, 
  onClosePortal,
  animationVariants = backdrop,
  children,
  }, ref) => {
    
  const { t } = useTranslation();
  const control = useAnimation();
  
  useOutsideClick({
    ref: ref as React.RefObject<any>,
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