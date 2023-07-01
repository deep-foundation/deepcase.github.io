import { motion, useAnimation, useCycle } from 'framer-motion';
import React, { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';
import { Flex, IconButton, Spacer } from '../framework';

const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

// export const Menu_ = React.memo<any>(() => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div className="background" variants={sidebar} />
//       <Navigation />
//       <MenuButtonAnimation boxVariant={boxVariant}>
//         <IconButton 
//           variant='outline' 
//           onClick={() => toggleOpen()}
//           isRound 
//           colorScheme='purple' 
//           aria-label='russian language button' 
//           icon={<FaLanguage />} 
//           _focus={{boxShadow: 'none'}}
//           _hover={{
//             transform: 'scale(1.1)'
//           }}
//         />
//       </MenuButtonAnimation>
//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
//   );
// });

export const Menu = React.memo<any>((props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef();
  const { height } = useDimensions(containerRef);
  const { i18n } = useTranslation();
  const language = i18n.language;
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);

  return (<>
      <Flex {...props}>
        <MenuButtonAnimation boxVariant={boxVariant}>
          <IconButton 
            variant='outline' 
            isRound 
            colorScheme='purple' 
            aria-label='menu button' 
            icon={<IoIosMenu />} 
            onClick={() => toggleOpen()}
            _focus={{boxShadow: 'none'}}
            _hover={{
              transform: 'scale(1.1)'
            }}
          />
        </MenuButtonAnimation>
        <Spacer />
        <MenuButtonAnimation boxVariant={boxVariant}>
          <IconButton 
            variant='outline' 
            isRound 
            colorScheme='purple' 
            aria-label='russian language button' 
            icon={<FaLanguage />} 
            _focus={{boxShadow: 'none'}}
            _hover={{
              transform: 'scale(1.1)'
            }}
            onClick={() => {
              changeLanguage(language === 'en' ? 'ru' : 'en');
            }}
          />
        </MenuButtonAnimation>
      </Flex>
      {/* <MenuButtonAnimation boxVariant={boxVariant}>
        <MenuPoints open={isOpen} onClose={onClose} overlay={<MenuOverlay />} />
      </MenuButtonAnimation> */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div variants={sidebar} />
        <Navigation isOpen={isOpen} onClose={toggleOpen} />
      </motion.nav>
    </>
  )
})

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, }
};

const MenuButtonAnimation = React.memo(({children, boxVariant}:{children?: any; boxVariant?: any;}) => {
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
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
})

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuItem = React.memo<any>(({ children }:{ children: any; }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{width: 120, height: 30, background: 'red', marginLeft: '2rem', listStyle: 'none'}}
    >
      {children}
    </motion.li>
  );
});

const variantsNav = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = React.memo<any>(({isOpen, onClose}:{isOpen?: boolean, onClose?: any;}) => {
  return(
    <motion.ul variants={variantsNav} style={{position: 'absolute', top: 0, left: 100, zIndex: 10000}}>
      {itemIds.map(i => (
        <MenuItem key={i}>{i}</MenuItem>
      ))}
    </motion.ul>
  )
});

const itemIds = [0, 1, 2, 3, 4];


const Backdrop = React.memo<any>(({isOpen}:{isOpen?: any;}) => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        pointerEvents: isOpen ? 'all' : 'none'
      }} />
  )
})