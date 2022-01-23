import { useMediaQuery } from "@material-ui/core";
import { default as GitHub } from '@material-ui/icons/GitHub';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from "react";
import { a, useSpring, useTransition } from 'react-spring';
import { Box, Button, Grid, IconButton, makeStyles } from "./framework";


const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    position: 'fixed',
    zIndex: 2,
  },
  cubeZone: {
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
  },
  cubeContainer: {
    width: '100%',
    height: '100%',
    '@media(max-width: 825px)': {
      height: 'calc(28px + 0.3vmax)'
    },
  },
  cube: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
  },
  cubeSurface: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    transform: 'translate3d(0, 0, 30px)',
  },
  emptySurface1: {
    transform: 'rotateY(180deg) translateZ(30px)',
  },
  emptySurface2: {
    transform: 'rotateX(90deg) translateZ(30px)',
  },
  root: {
    padding: '1rem 0',
    color: '#fff',
    transformOrigin: 'top',
    position: 'relative',
    top: 0, left: 0,
    width: '100vw',
    height: 'auto',
    zIndex: 1,
  },
  flexContainer: {
    padding: '0 2rem',
    '@media(max-width: 825px)': {
      padding: '0 1rem',
    }
  },
  boxContainer: {
    display:  'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media(max-width: 825px)': {
      width: '100%',
    }
  },
  buttons: {
    alignSelf: 'center',
    '& > :nth-child(-n+2)': {
      marginRight: '1.5rem',
      '@media(max-width: 825px)': {
        marginRight: 0,
      }
    },
  },
  buttonsMenu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    transform: 'rotateX(-90deg) translateZ(30px)',
  },
}))

export const UpperMenu = ({scrollContainer, refMenuButtons}:{scrollContainer: any, refMenuButtons: any;}) => {
  const classes = useStyles();
  const [scrolled, setScroll] = useState(false);
  const [mode, setMode] = useState(1);
  const [modeHidden, setModeHidden] = useState(1);
  const old = useRef({scrollTop: 0});
  const cubeRef = useRef<HTMLInputElement>();
  
  useEffect(() => {
    const id = setInterval(() => {
      const cubeSize = cubeRef?.current?.getBoundingClientRect().bottom;
      const menuButtonsSize = refMenuButtons?.current?.getBoundingClientRect().top;
      const isRotateMode = scrollContainer?.current?.scrollTop < menuButtonsSize;
      const isMainMode = scrollContainer?.current?.scrollTop < 450;
      setMode( isRotateMode ? 1 : 2 );
      setModeHidden( isMainMode ? 1 : 2 );
      if ( isMainMode ) {
        setScroll(false);
      } else if ( scrollContainer?.current?.scrollTop > old.current.scrollTop ) {
        setScroll(true);
      } else if ( scrollContainer?.current?.scrollTop < old.current.scrollTop ) {
        setScroll(false);
      }
      old.current.scrollTop = scrollContainer?.current?.scrollTop;
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
  

  const max825 = useMediaQuery('@media(max-width: 825px)');

  return (<header className={classes.container}>
      {transitions((style, item) => (item && <a.div ref={cubeRef} className={classes.cubeZone}
        style={{
          background: (max825 ? firstRotate.r : n).to({ range: [0, 0.5, 1], output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.69)', 'rgba(0, 0, 0, 99)'] }),
          ...style
        }}>
        <div className={classes.root}>
          <Grid container direction='row' justify='space-between' alignItems='center' item xs={12} className={classes.flexContainer}>
            { !max825
              ? <><Box className={classes.boxContainer}>
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
              </Box>
              <div className={classes.buttons}>
                <Button variant="text">
                  <a.span style={{
                    transformOrigin: 'top',
                    transform: fontsScroll.x
                                    .to({
                                      range: [0, 1, 0],
                                      output: [1, 0.2, 1],
                                    })
                                    .to(x => `scale(${x})`)
                  }}>Docs</a.span></Button>
                <Button variant="text">
                  <a.span style={{
                    transformOrigin: 'top',
                    transform: fontsScroll.x
                                    .to({
                                      range: [0, 1, 0],
                                      output: [1, 0.2, 1],
                                    })
                                    .to(x => `scale(${x})`)
                  }}>Talks</a.span></Button>
                <IconButton component={'a'} href="https://github.com/deepcase/deepcase"><GitHub style={{color: '#fff'}}/></IconButton>
              </div></>
              : <div className={classes.cubeContainer}>
                  <a.div className={classes.cube} style={{
                    // transformOrigin: scrolled || modeHidden == 2 ? 'top' : 'center',
                    transform:  rotate.r.to(r => `rotateX(${r*90}deg)`)}}>
                    <div className={cn(classes.cubeSurface, classes.header)}>
                      <a.h1 style={{
                        display: 'contents',
                        alignSelf: 'center',
                        fontSize: 'calc(22px + 0.5vmax)',
                        fontFamily: "'Comfortaa', 'sans-serif'",
                        margin: 0,
                        transformOrigin: 'top',
                        transform: fontsMode.x
                                            .to({
                                              range: [0, 1],
                                              output: [1, 0.5],
                                            })
                                            .to(x => `scale(${x})`)
                      }} >Deep.Foundation</a.h1>
                    </div>
                    <div className={cn(classes.cubeSurface, classes.emptySurface1)} />
                    <div className={cn(classes.cubeSurface, classes.emptySurface2)} />
                    <div className={cn(classes.cubeSurface, classes.buttonsMenu)}>
                      <Button variant="text">
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
                      <IconButton component={'a'} href="https://github.com/deepcase/deepcase"><GitHub style={{color: '#fff'}}/></IconButton>
                      <Button variant="text">
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
                  </div>
                </a.div>
              </div>
            }
          </Grid>
        </div>
      </a.div>))}
    </header>
  )
}