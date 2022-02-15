import { useQueryStore } from '@deepcase/store/query';
import { VscGithubAlt } from 'react-icons/vsc';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { a, useSpring, useTransition } from 'react-spring';
import { Box, Flex, HStack, Button, useMediaQuery, IconButton, Link } from './framework';
import { TalksForm } from './talks-form';


export function useSwitcherModalTalks () { 
  return useQueryStore('talks to us', false);
}

// const cubeSurface = {
//   display: 'block',
//   position: 'relative',
//   width: '100%',
//   height: 'auto',
// };
// const header = {
//   transform: 'translate3d(0, 0, 30px)',
// };
// const emptySurface1 = {
//   transform: 'rotateY(180deg) translateZ(30px)',
// };
// const emptySurface2 = {
//   transform: 'rotateX(90deg) translateZ(30px)',
// };

// const buttonsMenu = {
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   transform: 'rotateX(-90deg) translateZ(30px)',
// };

const face = {
  display: 'block',
  position: 'absolute',
  top: 0, left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
  fontFamily: 'sans-serif',
  color: 'red',
   padding: 6,
  textAlign: 'center',
};

const front = {
  background: 'rgba(0, 0, 0, 0.7)',
  transform: 'translate3d(0, 0, 32px)',
};

const back = {
  background: 'rgba(0, 0, 0, 0.3)',
  color: 'black',
  transform: 'rotateY(180deg) translateZ(32px)',
};

const top = {
  background: 'rgba(0, 0, 0, 0.3)',
  transform: 'rotateX(90deg) translateZ(32px)',
};

const bottom = {
  background: 'rgba(0, 0, 0, 0.7)',
  transform: 'rotateX(-90deg) translateZ(32px)',
};

export const UpperMenu = React.memo(({scrollContainer, refMenuButtons}:{scrollContainer: any, refMenuButtons: any;}) => {
  const [scrolled, setScroll] = useState(false);
  const [mode, setMode] = useState(1);
  const [modeHidden, setModeHidden] = useState(1);
  const [openTalksModal, setOpenTalksModal] = useSwitcherModalTalks();
  const old = useRef({scrollTop: 0});
  const cubeRef = useRef<HTMLInputElement>();
  
  useEffect(() => {
    const id = setInterval(() => {
      const scrollArea = scrollContainer?.current;
      const menuButtonsSize = refMenuButtons?.current?.getBoundingClientRect().top;
      const isRotateMode = scrollArea?.scrollTop < menuButtonsSize;
      const isMainMode = scrollArea?.scrollTop < 450;
      setMode( isRotateMode ? 1 : 2 );
      setModeHidden( isMainMode ? 1 : 2 );
      if ( isMainMode ) {
        setScroll(false);
      } else if ( scrollArea?.scrollTop > old.current.scrollTop ) {
        setScroll(true);
      } else if ( scrollArea?.scrollTop < old.current.scrollTop ) {
        setScroll(false);
      }
      old.current.scrollTop = scrollArea?.scrollTop;
    }, 100)
    return () => clearInterval(id);
  }, []);

  const { n } = useSpring({ 
    n: scrolled ? 0.97 : 0.19,
    config: { mass: 1.7, tension: 65, friction: 25 },
  });
  const firstRotate = useSpring({ 
    r: mode == 2 ? 0.97 : 0.19,
    config: { mass: 1.7, tension: 65, friction: 25 },
  });

  const rotate = useSpring({ 
    r: mode == 2 ? 1 : modeHidden == 2 ? 2 : 0,
    config: { mass: 1, tension: 215, friction: 45 },
  });

  const transitions = useTransition(!scrolled, {
    initial: { transform: "translateY(0%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(-100%)" },
    reverse: scrolled,
    trail: 2000,
    expires: false,
    config: { mass: 1.7, tension: 65, friction: 25 },
  })

  const fontsMode = useSpring({ 
    x: mode == 2 ? 1 : 0,
    delay: mode ? 0 : 600,
  });
  const fontsScroll = useSpring({ 
    x: scrolled ? 1 : 0,
    delay: scrolled ? 0 : 600,
  });
  
  const onOpenTalksModal = useCallback(() => setOpenTalksModal(true), []);
  const onCloseTalksModal = useCallback(() => setOpenTalksModal(false), []);

  const [max825] = useMediaQuery('(max-width: 825px)');

  const { t } = useTranslation();

  return (<Box as='header'w='100%' h='100%' pos='fixed' zIndex={2}>
      <a.div style={{
        width: '100%',
        height: '4rem',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center',
        perspectiveOrigin: 'center',
        transform: rotate.r.to(r => `rotateX(${r*90}deg)`)}}> 
        <Box sx={{...face, ...front}}>1</Box>
        <Box sx={{...face, ...back}}>2</Box>

        <Box sx={{...face, ...top}}>5</Box>
        <Box sx={{...face, ...bottom}}>6</Box>
      </a.div>
    </Box>
  )
})