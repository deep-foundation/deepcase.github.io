import { AnimatePresence, motion, useAnimation } from 'framer-motion';
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

// я хочу передавать ref в Backdrop, но не знаю как это сделать
// вот так не работает: <Backdrop ref={refModal} ... />
// поэтому я передаю ref в Backdrop через props
// и вот так я получаю ref в Backdrop: refModal.current
// но это не очень хорошо, потому что refModal.current может быть undefined
// и тогда я не смогу использовать useOutsideClick
// но я не знаю как сделать лучше
// может быть я должен использовать forwardRef?
// но я не знаю как это сделать
// поэтому я использую useRef
// как использовать forwardRef?



export const Backdrop = React.memo<any>(({
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

  export const BackdropForward = React.forwardRef<any, {
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