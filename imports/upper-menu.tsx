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

const cubeSurface = {
  display: 'block',
  position: 'absolute',
  width: '100%',
  // height: '100%',
};
const header = {
  transform: 'translate3d(0, 0, 30px)',
};
const emptySurface1 = {
  transform: 'rotateY(180deg) translateZ(30px)',
};
const emptySurface2 = {
  transform: 'rotateX(90deg) translateZ(30px)',
};

const buttonsMenu = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  transform: 'rotateX(-90deg) translateZ(30px)',
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
  
  console.log(max825);
  // console.log({'2': mqList});

  const { t } = useTranslation();

  return (<><Box as='header' w='100%' pos='fixed' zIndex={2}>
        {transitions((style, item) => (item && <a.div ref={cubeRef}
          style={{
            overflow: 'hidden',
            width: '150vw',
            height: 'inherit',
            border: 'none',
            position: 'absolute',
            top: 0, left: 0,
            backfaceVisibility: 'hidden',
            perspective: 0,
            transformStyle: 'flat',
            perspectiveOrigin: 'top center',
            borderTop: '1px dashed #ffffff40',
            borderBottom: '1px dashed #ffffff40',
            background: (max825 ? firstRotate.r : n).to({ range: [0, 0.5, 1], output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.69)', 'rgba(0, 0, 0, 99)'] }),
            ...style
          }}>
          <Box
            p='1rem 0'
            color='#fff'
            transformOrigin='top'
            pos='relative'
            w='100vw'
            h='auto'
            zIndex={1}
          >
            <Flex direction='row' justify={max825 ? 'center' : 'space-between'} align='center' p={max825 ? '0 1rem' : '0 2rem'}>
              { !max825
                ? <Flex direction='row' justify='space-between' w='100%'>
                    <a.h1 style={{
                      alignSelf: 'center',
                      fontSize: 'calc(32px + 0.5vmax)',
                      fontFamily: "'Comfortaa', 'sans-serif'",
                      margin: 0,
                      transformOrigin: 'top',
                      transform: fontsScroll.x
                                    .to({
                                      range: [0, 1, 0],
                                      output: [1, 0.5, 1],
                                    })
                                    .to(x => `scale(${x})`),
                    }}>Deep.Foundation</a.h1>
                  
                  <HStack spacing='1.5rem'>
                    <Button variant="ghost" as='a' aria-label='documentation' href='https://ivansglazunov.notion.site/documentation-83e8d1fc18e644b6a66ff05cd3a2e157'>
                      <a.span style={{
                        transformOrigin: 'top',
                        transform: fontsScroll.x
                                        .to({
                                          range: [0, 1, 0],
                                          output: [1, 0.2, 1],
                                        })
                                        .to(x => `scale(${x})`)
                      }}>Docs</a.span></Button>
                    <Button variant="ghost" aria-label='talks' onClick={onOpenTalksModal}>
                      <a.span style={{
                        transformOrigin: 'top',
                        transform: fontsScroll.x
                                        .to({
                                          range: [0, 1, 0],
                                          output: [1, 0.2, 1],
                                        })
                                        .to(x => `scale(${x})`)
                      }}>Talks</a.span></Button>
                    <IconButton
                      variant='ghost'
                      colorScheme='teal'
                      aria-label='github repository deep foundation'
                      href="https://github.com/deep-foundation" 
                      title='github repository deep foundation'
                      as='a'
                      fontSize='lg'
                      icon={
                        <a.span style={{
                          transformOrigin: 'top',
                          transform: fontsScroll.x
                                          .to({
                                            range: [0, 1, 0],
                                            output: [1, 0.2, 1],
                                          })
                                          .to(x => `scale(${x})`)
                        }}><VscGithubAlt /></a.span>}
                    />
                    {/* <IconButton aria-label='github repository deep foundation' component={'a'} href="https://github.com/deep-foundation" title='github repository deep foundation'><GitHub style={{color: '#fff'}}/></IconButton> */}
                  </HStack>
                </Flex>
                : <Box 
                  w='100%' 
                  h='auto'
                  sx={{
                    '@media(max-width: 825px)': {
                      height: 'calc(28px + 0.3vmax)'
                    },
                  }}
                >
                  <a.div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    perspectiveOrigin: 'center',
                    transform: rotate.r.to(r => `rotateX(${r*90}deg)`)}}> 
                    <Box sx={{...cubeSurface, ...header}}>
                      <a.h1 style={{
                        display: 'contents',
                        alignSelf: 'center',
                        fontSize: 'calc(22px + 0.5vmax)',
                        fontFamily: "'Comfortaa', 'sans-serif'",
                        margin: 0,
                        lineHeight: 1,
                        transformOrigin: 'top',
                        transform: fontsMode.x
                                            .to({
                                              range: [0, 1],
                                              output: [1, 0.5],
                                            })
                                            .to(x => `scale(${x})`)
                      }} >Deep.Foundation</a.h1>
                    </Box>
                    <Box sx={{...cubeSurface, ...emptySurface1}} />
                    <Box sx={{...cubeSurface, ...emptySurface2}} />
                    <Box sx={{...cubeSurface, ...buttonsMenu}}>
                      <Button 
                        variant="ghost" 
                        as='a' 
                        aria-label='documentation' 
                        href='https://ivansglazunov.notion.site/documentation-83e8d1fc18e644b6a66ff05cd3a2e157'
                      >
                        <a.span style={{
                          fontSize: 'calc(12px + 0.3vmax)',
                          lineHeight: 1,
                          transform: fontsMode.x
                                          .to({
                                            range: [0, 1, 0],
                                            output: [0.7, 1.1, 0.7],
                                          })
                                          .to(x => `scale(${x})`)
                        }}>Docs</a.span></Button>
                      {/* <IconButton aria-label='github repository deep foundation' title='github repository deep foundation' component={'a'} href="https://github.com/deep-foundation"><GitHub style={{color: '#fff'}}/></IconButton> */}
                      <IconButton
                        variant='ghost'
                        colorScheme='teal'
                        aria-label='github repository deep foundation'
                        href="https://github.com/deep-foundation" 
                        title='github repository deep foundation'
                        as='a'
                        fontSize='xl'
                        icon={
                          <a.span style={{
                            // fontSize: 'calc(12px + 0.3vmax)',
                            lineHeight: 1,
                            transform: fontsMode.x
                                            .to({
                                              range: [0, 1, 0],
                                              output: [0.7, 1.1, 0.7],
                                            })
                                            .to(x => `scale(${x})`)
                          }}><VscGithubAlt /></a.span>}
                      />
                      <Button aria-label='talks' variant="text" onClick={onOpenTalksModal}>
                        <a.span style={{
                          fontSize: 'calc(12px + 0.3vmax)',
                          lineHeight: 1,
                          transform: fontsMode.x
                                          .to({
                                            range: [0, 1, 0],
                                            output: [0.7, 1.1, 0.7],
                                          })
                                          .to(x => `scale(${x})`)
                        }}>Talks</a.span></Button>
                    </Box>
                  </a.div>
                </Box>
              }
            </Flex>
          </Box>
        </a.div>))}
      </Box>
      <TalksForm portalOpen={openTalksModal} onClosePortal={onCloseTalksModal} />
    </>
  )
})