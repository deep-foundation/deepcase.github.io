import { Box, Button, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { default as GitHub } from '@material-ui/icons/GitHub';
import React, { useEffect, useState, useLayoutEffect } from "react";
import { a, useSpring, config } from 'react-spring';

const scale = (n) => `scaleY(${n})`;
const trans = (n) => `translate3d(0, 0, -${n}rem)`;
const transCube = (y) => `translateY(-${y}rem)`;

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
  },
  root: {
    padding: '1rem 0',
    color: '#fff',
    transformOrigin: 'top',
    borderTop: '1px dashed #ffffff40',
    borderBottom: '1px dashed #ffffff40',
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

export const UpperMenu = ({scrollContainer}:{scrollContainer: any}) => {
  const classes = useStyles();
  const [scrolled, setScroll] = useState(false);
  
  
  useEffect(() => {
    const id = setInterval(() => {
      setScroll(scrollContainer?.current?.scrollTop > 136 ? true : false);
    }, 100)
    return () => clearInterval(id);
  }, []);

  const { n } = useSpring({ n: scrolled === true ? 1 : 0 });

  const { y } = useSpring({ y: scrolled === true ? -5 : 0 })

  useLayoutEffect(() => {
    const id = setInterval(() => {
      
    }, 10)
    return () => clearInterval(id);
  }, []);

  return (<a.div className={classes.container} 
            style={{
              transform: y.to({
                      range: [0, 1],
                      output: [0, -1]
                      })
                     .to(transCube)}}>
      <a.div className={classes.cubeZone}
        style={{
          background: n.to({ range: [0, 0.35, 0.50, 0.65, 0.85, 1], output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 89)', 'rgba(0, 0, 0, 1)'] }),
          transform: n.to({
                        // range: [1, 0.95, 0.85, 0.65, 0.5, 0.35, 0],
                        // output: [1, 0.95, 0.85, 0.65, 0.5, 0.35, -5]
                        range: [1, 0],
                        output: [0.01, 0]
                      })
                      .to(trans)
        }}>
        <div className={classes.root}
        >
          <Grid container direction='row' justify='center' alignItems='center' item xs={12} className={classes.flexContainer}>
            <Grid item xs={12} lg={8} xl={6}>
              <Box className={classes.boxContainer}>
                <a.div style={{
                  alignSelf: 'center',
                  fontFamily: "'Comfortaa', 'sans-serif'",
                  fontSize: n.to({
                      range: [0, 1],
                      output: [32, 24]
                    })
                  }}>Deep.Foundation</a.div>
                <div className={classes.buttons}>
                  <Button variant="text" >Docs</Button>
                  <Button variant="text" >Talk to us</Button>
                  <IconButton component={'a'} href="https://github.com/deepcase/deepcase"><GitHub style={{color: '#fff'}}/></IconButton>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </a.div>
    </a.div>
  )
}