import { darken } from '@material-ui/core/styles';
import React, { useRef } from 'react';
import { a, useSpring } from 'react-spring';
import { Box, GravityCard, makeStyles, Typography } from './framework';
import { Space } from './space';


const useStyles = makeStyles(theme => ({
  wrapperMain: {
    width: '100%',
    position: 'relative',
  },
  wrapperUp: {
    width: '100%',
    position: 'relative',
    boxSizing: 'border-box',
  },
  borderWrapper: {
    position: 'absolute',
    left: '-25%', top: 0,
    width: '150%', height: '100%',
    overflow: 'hidden',
  },
  contentWrapper: {
    position: 'relative',
    overflow: 'hidden',
    padding: 9, //'7px 7px 0 7px',
  },
  title: {
    width: 'calc(100% - 16px)',
    margin: '0 auto',
  },
  border: {
    position: 'absolute',
    boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',
    borderRadius: 5,
    padding: 0,
    height: '105%',
    width: '94.5%',
    top: '3%',
    left: '2.5%',
    background: darken(theme?.palette?.background?.default, 0.5),
    
  },
  container: {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 48,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    boxSizing: 'border-box',
    '@media(min-width: 1960px)': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    }
  },
  wrapperDown: {
  },
  cornerWrapper: {
    position: 'relative',
    left: '-25%', top: 0,
    overflow: 'hidden',
    width: '150%', height: '50%',
  },
  box: {
    left: '16.65%',
    width: 'calc(67% - 22.3%)',
    position: 'relative',
  },
  px: {
    width: '100%',
  },
  cornerBg: {
    position: 'absolute',
    left: '-100%', top: '-100%',
    width: '300%',
    height: '300%',
    backgroundPosition: 'left',
  },
  corner: {
    background: darken(theme?.palette?.background?.default, 0.5),
    width: '100%',
    height: '100%',
    boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)', 
    borderRadius: 5,
    position: 'absolute',
    top: '-50.5%',
    left: '24.35%',
    transform: 'rotate(45deg)',
    overflow: 'hidden',
  },
  dashedCornerBg: {
    position: 'absolute',
    left: '-100%', top: '-100%',
    width: '300%',
    height: '300%',
    transform: 'rotate(-45deg)',
    backgroundPosition: 'left',
  },
  dashedCorner: {
    width: '100%',
    height: '100%',
    border: '1px dashed transparent', 
    borderRadius: 5,
    position: 'absolute',
    top: '-51%',
    left: '24.2%',
    overflow: 'hidden',
  },
  arrowCornerBg: {
    position: 'absolute',
    left: '-100%', top: '-100%',
    width: '300%',
    height: '300%',
    transform: 'rotate(-45deg)',
    backgroundPosition: 'left',
  },
  arrowCorner: {
    width: '100%',
    height: '100%',
    border: '10px inset #00a9f4', 
    borderRadius: 5,
    position: 'absolute',
    boxSizing: 'border-box',
    top: '-35%',
    left: '-35%',
    overflow: 'hidden',
  },
  upperIcons: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
  },
  iconContainerOpacity: {
    position: 'relative',
    opacity: 0,
  },
  dashedBorder: {
    border: '1px dashed transparent',
    position: 'absolute',
    top: '2.8%',
    left: 'calc(2.4% + 15.8%)',
    borderRadius: 5,
    padding: 0,
    height: '105%',
    width: 'calc(94.2% - 31.3%)',
  },
  dashedBorderBg: {
    position: 'absolute',
    top: '2.8%',
    left: 'calc(2.4% + 15.8%)',
    borderRadius: 5,
    padding: 0,
    height: '105%',
    width: 'calc(94.2% - 31.3%)',
  },
  topLine: {
    background: '#00a9f4',
    position: 'absolute',
    top: 20, left: 20,
    width: 'calc(100% - 40px)',
    height: 10,
  },
}))

const transTitle = (x, y) => `translate3d(${x / 4}px,${(y / 16) * 0.1}px,0)`;
const transDescription = (x, y) => `translate3d(${x / -5}px,${(y / 7) * 0.1}px,0)`;
const transDashedBorder = (x, y) => `translate3d(${x / 12}px,${(y / 16) * 0.1}px,0)`;
const transDashedBorderCorner = (x, y) => `translate3d(${x / 12}px,${(y / 16) * 0.1}px,0) rotate(45deg)`;
const transArrowBorderCorner = (x, y) => `translate3d(${x / -20}px,${x / 20}px,0)`;
const transTopLine = (x, y) => `translate3d(${x / -20}px,${(y / -20) * 0.1}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 12}px,${(y / 12) * 0.1}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 18}px,${(y / 18) * 0.1}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 8}px,${(y / 8) * 0.1}px,0)`;

var x = -1;
var y = -1;
if (typeof(window) === 'object') {
  document.onmousemove = function(event) {
    x = event.pageX;
    y = event.pageY;
  }
}

export const SpecialCard = React.memo(({
  title,
  src,
  alt,
  description,
  boxProps,
  icon1,
  icon2,
  icon3,
  fullText,
  ...props
}:{
  title: string;
  src?: string;
  alt?: string;
  description?: string;
  boxProps?: any;
  icon1?: any;
  icon2?: any;
  icon3?: any;
  fullText?: any;
  [prop: string]: any;
}) => {
  const classes = useStyles();

  const [spring, set] = useSpring(() => ({ xy: [0, 0], borderColor: '#393d40', config: { mass: 10, tension: 550, friction: 140 } }));
  const ref = useRef<any>();
  const setRef = useRef<any>();

  const localCalc = (x, y) => {
    const box = ref?.current?.getBoundingClientRect();
    return [x - (box.left + (box.width / 2)), y - (box.top + (box.height / 1.7))];
  };

  return (<GravityCard paperComponent='div' setRef={setRef} PaperProps={{ elevation: 0 }} ym={0.1} xm={-0.9} {...props}>
      <div className={classes.wrapperMain} ref={ref} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: localCalc(x, y), borderColor: '#00a9f4' })} onMouseLeave={() => set({ xy: [0,0], borderColor: '#393d40' })} >
        <div className={classes.wrapperUp}>
          <div className={classes.contentWrapper}>
            <div className={classes.border} />
            <Box className={classes.container} {...boxProps}>
              <a.div className={classes.topLine} style={{ transform: spring.xy.to(transTopLine), backgroundColor: spring.borderColor }}></a.div>
              <div className={classes.iconContainerOpacity}>
                <div>
                  {icon1}
                </div>
              </div>
              <Space />
              <div style={{ opacity: 0 }}>
                <Typography variant='h5' align='center' className={classes.title}>{title}</Typography>
              </div>
              <Space />
              <a.div style={{ transform: spring.xy.to(transDescription), opacity: 0.8 }}>
                <Typography variant='body2' align='center'>{description}</Typography>
              </a.div>
            </Box>
          </div>
          <div className={classes.borderWrapper}>
            <a.div className={classes.dashedBorder} style={{ transform: spring.xy.to(transDashedBorder), borderColor: spring.borderColor }}>
              <div className={classes.dashedBorderBg} />
            </a.div>
          </div>
        </div>
        <div className={classes.upperIcons}>
          <div className={classes.iconContainer}>
            <div style={{opacity: 0}}>
              {icon1}
            </div>
            <a.div style={{ position: 'absolute', top: 0, left: 0, transform: spring.xy.to(trans3) }}>
              {icon1}
            </a.div>
            <a.div style={{ position: 'absolute', top: 0, left: 0, transform: spring.xy.to(trans4) }}>
              {icon2}
            </a.div>
            <a.div style={{ position: 'absolute', top: 0, left: 0, transform: spring.xy.to(trans5) }}>
              {icon3}
            </a.div>
          </div>
          <Space />
          <a.div style={{ padding: '0 16px', transform: spring.xy.to(transTitle) }}>
            <Typography variant='h5' align='center' className={classes.title}>{title}</Typography>
          </a.div>
        </div>
        <div className={classes.wrapperDown}>
          <div className={classes.cornerWrapper}>
            <div className={classes.box}>
              <img className={classes.px} src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="/>
              <div className={classes.corner}>
                <div className={classes.cornerBg}>
                  <a.div className={classes.arrowCorner} style={{ transform: spring.xy.to(transArrowBorderCorner), borderColor: spring.borderColor }}>
                    <div className={classes.arrowCornerBg}></div>
                  </a.div>
                </div>
              </div>
              <a.div className={classes.dashedCorner} style={{transform: spring.xy.to(transDashedBorderCorner), borderColor: spring.borderColor }}>
                <div className={classes.dashedCornerBg}></div>
              </a.div>
            </div>
          </div>
        </div>
      </div>
    </GravityCard>
  )
})