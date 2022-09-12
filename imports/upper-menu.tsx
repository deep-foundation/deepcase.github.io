import { useQueryStore } from '@deep-foundation/store/query';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { FaDiscord, FaGithubAlt } from 'react-icons/fa';
import { a, useSpring, useTransition } from 'react-spring';
import { Box, Button, ButtonGroup, Flex, HStack, IconButton, Img, useMediaQuery } from './framework';
import { H1 } from './headers';
import { TalksForm } from './talks-form';


export function useSwitcherModalTalks () { 
  return useQueryStore('talks to us', false);
}

const cubeSurface = {
  display: 'block',
  position: 'absolute',
  width: '100%',
};
const header = {
  transform: 'translate3d(0, 0, 30px)',
};
const emptySurface1 = {
  transform: 'rotateY(180deg) translate3d(0, 0, 30px)',
};
const emptySurface2 = {
  transform: 'rotateX(90deg) translate3d(0, 0, 30px)',
};

const buttonsMenu = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  transform: 'rotateX(-90deg) translate3d(0, 0, 30px)',
};

export const UpperMenu = React.memo(({scrollContainer, refMenuButtons, onChangeLanguage}:{scrollContainer: any, refMenuButtons: any; onChangeLanguage?: any;}) => {
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
  
  const onOpenTalksModal = useCallback((event) => {
    setOpenTalksModal(true);
    event.stopPropagation();
  }, []);
  const onCloseTalksModal = useCallback(() => setOpenTalksModal(false), []);

  const [max825] = useMediaQuery('(max-width: 825px)');

  const { i18n } = useTranslation();
  const active = i18n.language;

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
            perspective: 'none',
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 'top center',
            borderTop: '1px dashed #ffffff40',
            borderBottom: '1px dashed #ffffff40',
            background: (max825 ? firstRotate.r : n).to({ range: [0, 0.5, 1], output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.69)', 'rgba(0, 0, 0, 99)'] }),
            ...style
          }}>
          <Box
            color='#fff'
            transformOrigin='top'
            pos='relative'
            w='100vw'
            h='auto'
            zIndex={1}
            sx={{
              padding: '0.2rem 0',
              '@media(max-width: 825px)': {
                padding: '1rem 0',
              }
            }}
          >
            <Flex direction='row' justify={{sm: 'center', md: 'space-between'}} align='center' p={{sm: '0 1rem', md: '0 2rem'}}>
              { !max825
                ? <Flex direction='row' justify='space-between' w='100%'>
                    <HStack>
                      <a.div style={{
                        width: '3.25rem',
                        marginRight: '1rem',
                        alignSelf: 'center',
                        transformOrigin: 'top',
                        transform: fontsScroll.x
                          .to({
                            range: [0, 1, 0],
                            output: [1, 0.5, 1],
                          })
                          .to(x => `scale(${x})`),
                      }}>
                        <Img src='./logo_n.svg' alt='logo' />
                      </a.div>
                      <a.h1 style={{
                        alignSelf: 'center',
                        fontSize: 'calc(32px + 0.5vmax)',
                        fontFamily: "'Zen Kaku Gothic Antique', sans-serif",
                        transformOrigin: 'top',
                        transform: fontsScroll.x
                          .to({
                            range: [0, 1, 0],
                            output: [1, 0.5, 1],
                          })
                          .to(x => `scale(${x})`),
                      }}>Deep.Foundation</a.h1>
                  </HStack>
                  <HStack spacing='1rem'>
                    <Button 
                      aria-label='documentation'
                      as='a' 
                      target='_blank'
                      variant='ghost'
                      // size='md'
                      href='https://ivansglazunov.notion.site/documentation-83e8d1fc18e644b6a66ff05cd3a2e157'>
                      <a.span style={{
                        transformOrigin: 'top',
                        transform: fontsScroll.x
                          .to({
                            range: [0, 1, 0],
                            output: [1, 0.2, 1],
                          })
                          .to(x => `scale(${x})`)
                      }}>
                        Docs
                      </a.span>
                    </Button>
                    <Button variant="ghost" aria-label='talks' onClick={onOpenTalksModal}>
                      <a.span style={{
                        transformOrigin: 'top',
                        transform: fontsScroll.x
                          .to({
                            range: [0, 1, 0],
                            output: [1, 0.2, 1],
                          })
                          .to(x => `scale(${x})`)
                      }}>Talks</a.span>
                    </Button>
                    <IconButton
                      variant='ghost'
                      colorScheme='teal'
                      target='_blank'
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
                        }}><FaGithubAlt /></a.span>}
                    />
                    <IconButton
                      variant='ghost'
                      colorScheme='teal'
                      target='_blank'
                      aria-label='discord server deep foundation'
                      href="https://discord.gg/xcTVRAgH9t" 
                      title='discord server deep foundation'
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
                        }}><FaDiscord /></a.span>}
                    />
                    <a.div style={{
                          transformOrigin: 'top',
                          transform: fontsScroll.x
                            .to({
                              range: [0, 1, 0],
                              output: [1, 0.2, 1],
                            })
                            .to(x => `scale(${x})`)
                    }}>
                      <ButtonGroup variant='ghost' spacing='0' size='md' isAttached>
                        <Button isActive={active == 'en'} aria-label='switch to english' onClick={() => onChangeLanguage('en')}>En</Button>
                        <Button isActive={active == 'ru'} aria-label='switch to russian' onClick={() => onChangeLanguage('ru')}>Ru</Button>
                      </ButtonGroup>
                    </a.div>
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
                  <motion.div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    perspectiveOrigin: 'top',
                  }}
                    animate={{ 
                      rotateX: mode == 2 ? '90deg' : modeHidden == 2 ? '-90deg' : 0, 
                    }}
                    transition={{ type: 'spring', damping: 20}}
                  > 
                    <Box
                      sx={{
                        display: 'block',
                        position: 'absolute',
                        ...header,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <HStack  
                        justify='space-between'
                      >
                        <Box>
                          <HStack spacing='1rem'>
                            <motion.div style={{
                                width: '2rem',
                                alignSelf: 'center',
                                transformOrigin: 'top',
                                marginRight: '0.5rem',
                              }}
                              animate={{ 
                                scale: mode == 2 ? 0 : 1, 
                              }}
                              transition={{ type: 'spring', damping: 20 }}
                            >
                              <Img src='./logo.png' alt='logo' />
                            </motion.div>
                            <motion.div style={{
                                transformOrigin: 'top',
                              }}
                              animate={{ 
                                scale: mode == 2 ? 0 : 1, 
                              }}
                              transition={{ type: 'spring', damping: 20 }}
                            >
                              <H1>Deep.Foundation</H1>
                            </motion.div>
                          </HStack>
                        </Box>
                        <ButtonGroup
                          as={motion.div} 
                          variant='ghost' 
                          spacing='0' 
                          size='sm' 
                          isAttached
                          sx={{transformOrigin: 'top',}}
                          animate={{ 
                            scale: mode == 2 ? 0 : 1, 
                          }}
                          transition={{ type: 'spring' }}
                        >
                          <Button isActive={active == 'en'} aria-label='switch to english' onClick={() => onChangeLanguage('en')}>En</Button>
                          <Button isActive={active == 'ru'} aria-label='switch to russian' onClick={() => onChangeLanguage('ru')}>Ru</Button>
                        </ButtonGroup>
                      </HStack>
                    </Box>
                    <Box sx={{...cubeSurface, ...emptySurface1}} />
                    <Box sx={{...cubeSurface, ...emptySurface2}} />
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        position: 'absolute', 
                        ...buttonsMenu
                        }}
                      >
                      <Button 
                        aria-label='documentation'
                        as='a' 
                        target='_blank'
                        variant='text'
                        href='https://ivansglazunov.notion.site/documentation-83e8d1fc18e644b6a66ff05cd3a2e157'>
                        <a.span style={{
                          transform: fontsMode.x
                            .to({
                              range: [0, 1, 0],
                              output: [0.7, 1.1, 0.7],
                            })
                            .to(x => `scale(${x})`)
                        }}>
                          Docs
                        </a.span>
                      </Button>
                      <IconButton
                        variant='ghost'
                        colorScheme='teal'
                        aria-label='github repository deep foundation'
                        href="https://github.com/deep-foundation" 
                        title='github repository deep foundation'
                        as='a'
                        target='_blank'
                        fontSize='xl'
                        icon={
                          <a.span style={{
                            lineHeight: 1,
                            transform: fontsMode.x
                                            .to({
                                              range: [0, 1, 0],
                                              output: [0.7, 1.1, 0.7],
                                            })
                                            .to(x => `scale(${x})`)
                          }}><FaGithubAlt /></a.span>}
                      />
                      <IconButton
                        variant='ghost'
                        colorScheme='teal'
                        aria-label='discord server deep foundation'
                        href="https://discord.gg/xcTVRAgH9t" 
                        title='discord server deep foundation'
                        as='a'
                        target='_blank'
                        fontSize='xl'
                        icon={
                          <a.span style={{
                            lineHeight: 1,
                            transform: fontsMode.x
                                            .to({
                                              range: [0, 1, 0],
                                              output: [0.7, 1.1, 0.7],
                                            })
                                            .to(x => `scale(${x})`)
                          }}><FaDiscord /></a.span>}
                      />
                      <Button aria-label='talks' variant="text" onClick={onOpenTalksModal}>
                        <a.span style={{
                          transform: fontsMode.x
                            .to({
                              range: [0, 1, 0],
                              output: [0.7, 1.1, 0.7],
                            })
                            .to(x => `scale(${x})`)
                        }}>Talks</a.span></Button>
                    </Box>
                  </motion.div>
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