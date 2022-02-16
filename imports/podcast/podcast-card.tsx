import React, { useCallback, useEffect, useRef, useState } from 'react';
import { a, useSpring } from 'react-spring';
import { ICard } from '../../pages/parallax';
import { Box, GravityCard, Tooltip, Text, Img } from '../framework';
import { Play } from '../icons/play';
import { LogoImage } from './logo';
import { PodcastSource } from './podcast-source';


const podcastCardContainer = {
  display:'flex', 
  flexDirection:'column', 
  position: 'relative', 
  boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)', 
  borderRadius: 'radii.md', 
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  background: '#19202B',
};
const guestArea = {
  position: 'relative',
  height: '100%',
};
const imageClass = {
  display: 'block',
  transform: 'scale(0.5)',
  transformOrigin: 'bottom',
};

const logoContainer = {
  position: 'relative', 
  width: '100%',
};
const controlArea = {
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  background: '#080d11c2', 
  paddingRight: '4%', 
  paddingLeft: '4%',
  zIndex: 2,
};
const controlButton = {
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center',
};

const trans1 = (x, y) => `translate3d(${x / 2}px,${y / 2}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 18}px,${y / 18}px,0)`;
const trans3 = (x) => `translateX(${x / 15}px)`;

var x = -1;
var y = -1;
if (typeof(window) === 'object') {
  document.onmousemove = function(event) {
    x = event.pageX;
    y = event.pageY;
  }
}

export const Podcast = React.memo(({
  card,
}:{
  card: ICard;
}) => {
  const {
    src: guestImgSrc,
    srcPng: guestImgSrcPng,
    guestName,
    occupation,
    date,
    length,
    privateCast = true,
    imgs,
  } = card;
  const [openSourcePodcast, setOpenSourcePodcast] = useState(false);
  const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const ref = useRef<any>();
  const setRef = useRef<any>();

  const localCalc = (x, y) => {
    const box = ref?.current?.getBoundingClientRect();
    return [x - (box.left + (box.width / 2)), y - (box.top + (box.height / 2))];
  };

  useEffect(() => {
    const i = setInterval(() => {
      const box = ref?.current?.getBoundingClientRect();
      const { left, top, right, bottom } = box;
      if (!(left < x && right > x && top < y && bottom > y)) {
        set({xy: [0,0]})
        setRef.current({ xys: [0, 0, 1] });
      }
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const onClickPodcast = useCallback(() => {
    setOpenSourcePodcast((openSourcePodcast) => !openSourcePodcast);
  }, []);

  const timeoutRef = useRef<any>(undefined);
  const onMouseMove = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenSourcePodcast(false);
    }, 30000);
  }, []);

  return(<GravityCard setRef={setRef} onClickCapture={onClickPodcast} onMouseMove={onMouseMove} PaperProps={{style: {padding: 0}}}><>
      <Box ref={ref} sx={podcastCardContainer}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: localCalc(x, y) })}
        onMouseLeave={() => set({xy: [0,0]})}
      >
        <a.div style={{ 
          width: '150%',
          height: '150%',
          position: 'absolute',
          top: '-25%',
          left: '-25%',
          background: 'linear-gradient(-90deg, rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(-90deg, rgba(255, 255, 255,.8) 1px, transparent 1px), linear-gradient(-90deg, transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(rgba(255, 255, 255,.8) 1px, transparent 1px)',
          backgroundSize: '1em 1em',
          transform: spring.xy.to(trans1), 
        }}/>
        <Box sx={guestArea}>
          {imgs.map(i => (<LogoImage key={i.id} src={i.src} alt={i.alt} top={i.top} left={i.left} width={i.width} spring={spring} />))}
          <a.div style={{ 
            position: 'absolute', 
            zIndex: 2,
            right: 0,
            bottom: 0,
            transform: spring.xy.to(trans3) 
          }}>
            <picture>
              <source srcSet={guestImgSrc} type="image/webp" />
              <source srcSet={guestImgSrcPng} type="image/png" /> 
              <Img src={guestImgSrc} alt={guestName} htmlWidth='100%' htmlHeight='100%' sx={imageClass} />
            </picture>
          </a.div>
            <a.div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0,
              padding: '4%',
              transform: spring.xy.to(trans2) 
            }}>
              <Text fontSize='sm' as='div' lineHeight='tall' sx={{textTransform: 'uppercase'}}>{guestName}</Text>
              <Text fontSize='xs' as='div' sx={{whiteSpace: 'normal'}}>{occupation}</Text>
              <br />
              <Text fontSize='xs' as='div'>{date}</Text>
            </a.div>
        </Box>
        <Box sx={controlArea} py={1}>
          <Box sx={controlButton}>
            <Text fontSize='xs' as='div' sx={{marginRight: '12%'}}>{length}</Text>
            <Play />
          </Box>
          {privateCast && 
            // <Tooltip TransitionComponent={Zoom} title="the guest chose to keep the entry private" placement="right-start" arrow>
              <Text fontSize='xs' casing='uppercase' as='div'>private</Text>
            // </Tooltip>
          }
        </Box>
      </Box>
      <PodcastSource switcher={openSourcePodcast} card={card} />
      </>
    </GravityCard>
  )
})