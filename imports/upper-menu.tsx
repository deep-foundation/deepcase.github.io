import { Box, Button, Grid, IconButton, makeStyles } from "./framework";
import { default as GitHub } from '@material-ui/icons/GitHub';
import React, { useEffect, useState, useRef } from "react";
import { a, useSpring, useTransition } from 'react-spring';


const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    position: 'fixed',
    zIndex: 2,
  },
  cubeZone: {
    width: '150vw',
    height: '5rem',
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
  },
  boxContainer: {
    display:  'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    alignSelf: 'center',
    '& > :nth-child(-n+2)': {
      marginRight: '1.5rem',
    }
  },
}))

const pathLength = 150;

export const UpperMenu = ({scrollContainer}:{scrollContainer: any}) => {
  const classes = useStyles();
  const [scrolled, setScroll] = useState(false);
  const old = useRef({scrollTop: 0});
  
  useEffect(() => {
    const id = setInterval(() => {
      if (scrollContainer?.current?.scrollTop > old.current.scrollTop) {
        setScroll(true);
      } else if (scrollContainer?.current?.scrollTop < old.current.scrollTop) {
        setScroll(false);
      }
      old.current.scrollTop = scrollContainer?.current?.scrollTop;
    }, 100)
    return () => clearInterval(id);
  }, []);

  const { n } = useSpring({ 
    n: scrolled ? 1 : 0.19,
    config: { mass: 1.7, tension: 65, friction: 25 },
  });

  const transitions = useTransition(!scrolled, {
    initial: { transform: "translateY(0%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(-100%)" },
    reverse: scrolled,
    expires: false,
    config: { mass: 1.7, tension: 65, friction: 25 },
  })

  const fonts = useSpring({ 
    x: scrolled ? 1 : 0.8,
    delay: scrolled ? 0 : 600,
  });

  return (<div className={classes.container}>
      {transitions((style, item) => (item && <a.div className={classes.cubeZone}
        style={{
          background: n.to({ range: [0, 0.35, 0.50, 0.65, 0.85, 1], output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 89)', 'rgba(0, 0, 0, 1)'] }),
          ...style
        }}>
        <div className={classes.root}
        >
          <Grid container direction='row' justify='center' alignItems='center' item xs={12} className={classes.flexContainer}>
            <Grid item xs={12} lg={8} xl={6}>
              <Box className={classes.boxContainer}>
                <a.div style={{
                  alignSelf: 'center',
                  fontSize: 'calc(42px + 0.3vmax)',
                  fontFamily: "'Comfortaa', 'sans-serif'",
                  transform: fonts.x
                                .to({
                                  range: [0, 1, 0],
                                  output: [1, 0.5, 1],
                                })
                                .to(x => `scale(${x})`),
                  }}>Deep.Foundation</a.div>
                <div className={classes.buttons}>
                  <Button variant="text">
                    <a.span style={{
                      transform: fonts.x
                                      .to({
                                        range: [0, 1, 0],
                                        output: [1, 0.5, 1],
                                      })
                                      .to(x => `scale(${x})`)
                    }}>Docs</a.span></Button>
                  <Button variant="text">
                    <a.span style={{
                      fontSize: 'calc(12px + 0.3vmax)',
                      transform: fonts.x
                                      .to({
                                        range: [0, 1, 0],
                                        output: [1, 0.5, 1],
                                      })
                                      .to(x => `scale(${x})`)
                    }}>Talk to us</a.span></Button>
                  <IconButton component={'a'} href="https://github.com/deepcase/deepcase"><GitHub style={{color: '#fff'}}/></IconButton>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </a.div>))}
    </div>
  )
}