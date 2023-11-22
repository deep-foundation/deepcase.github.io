import { useCallback, useEffect, useRef, useState, memo } from 'react';
import { a, useSpring } from 'react-spring';
import { GiDuration, GiVideoCamera, GiAudioCassette } from 'react-icons/gi';
import { Flex, Box, GravityCard, Tooltip, Text, Img, HStack, VStack, Grid } from '../framework';
import { Play } from '../icons/play';
import { Space } from '../space';
import { LogoImage } from './logo';
import { PodcastSource } from './podcast-source';
import moment from 'moment';
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);


export interface IProvider { 
  icon: string;
  alt: string;
  title: string;
}
export interface ICardPodcast {
  id: string;
  duration: string;
  date?: string;
  published?: boolean;
  format?: string;
  links: { provider: IProvider, href: string }[];
  imgs?: {
    id: string;
    altLogo: string;
    srcLogo: string;
    topLogo: number;
    leftLogo: number;
    widthLogo: number;
  }[];
  speakers: {
    id: string;
    guestImgSrcPng: string;
    guestImgSrcWebp?: string;
    guestName?: string;
    occupation?: string;
  }[],
  privateCast?: boolean;
}

const imageClass = {
  display: 'block',
  transform: 'scale(0.5)',
  transformOrigin: 'bottom',
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

export const Podcast = memo<any>(({
  card,
}:{
  card: ICardPodcast;
}) => {
  const {
    duration,
    date,
    format = 'audio' || 'video',
    privateCast = true,
    imgs,
    speakers,
    published = false,
  } = card;
  const [openSourcePodcast, setOpenSourcePodcast] = useState(false);
  const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const ref = useRef<any>(null);
  const setRef = useRef<any>(null);

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

  var source: JSX.Element[] = []; 
  var data: JSX.Element[] = []; 
  for(var i = 0; i < speakers?.length; i++) {
    var speaker = speakers[i];
    source.push(<a.div key={speaker?.id} style={{ 
        // width: '100%',
        // height: '100%',
        zIndex: 2,
        transform: spring.xy.to(trans3)
      }}>        
        <Text textStyle='Regular16' lineHeight='tall' sx={{textTransform: 'uppercase'}}>
          {speaker?.guestName}
        </Text>
        <Text 
          fontSize='sm' 
          as='div' 
          sx={{
            whiteSpace: 'normal', 
            '&:first-letter': {textTransform: 'capitalize'}
          }}>
          {speaker?.occupation}
        </Text>
      </a.div>) 
    data.push(<a.div key={speaker?.id} style={{
        transform: spring.xy.to(trans2) 
      }}>
        <Text textStyle='Regular16' lineHeight='tall' sx={{textTransform: 'uppercase'}}>{speaker?.guestName}</Text>
        <Text 
          fontSize='sm' 
          as='div' 
          sx={{
            whiteSpace: 'normal', 
            '&:first-letter': {textTransform: 'capitalize'}
          }}>{speaker?.occupation}</Text>
        <Space unit={0.5} />
      </a.div>)
  }

  return(<GravityCard setRef={setRef} onClickCapture={onClickPodcast} onMouseMove={onMouseMove} PaperProps={{style: {padding: 0}}}><>
      <Box
        display='flex'
        flexDirection='column'
        pos='relative' 
        boxShadow='0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)' 
        borderRadius='md' 
        overflow='hidden'
        h='100%'
        w='100%'
        bg='dark'
        ref={ref}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: localCalc(x, y) })}
        onMouseLeave={() => set({xy: [0,0]})}
      >
        <a.div style={{ 
          width: '150%',
          height: '150%',
          position: 'absolute',
          top: '-25%',
          zIndex: !published ? 111 : 0,
          left: '-25%',
          background: published ? 'linear-gradient(-90deg, rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255,.08) 1px, transparent 1px), linear-gradient(transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(-90deg, rgba(255, 255, 255,.8) 1px, transparent 1px), linear-gradient(-90deg, transparent 0px, #202a38 1px, #202a38 80px, transparent 80px), linear-gradient(rgba(255, 255, 255,.8) 1px, transparent 1px)' : '#ffffff',
          backgroundSize: '1em 1em',
          transform: spring.xy.to(trans1), 
        }} />
        <Box pos='relative' h='100%'>
          {imgs?.map(i => (<LogoImage key={i.id} src={i.srcLogo} alt={i.altLogo} top={i.topLogo} left={i.leftLogo} width={i.widthLogo} spring={spring} />))}
          <VStack alignItems='flex-start' pl='3%'>{data}</VStack>
          <Box display='grid' gridAutoFlow='column' pos='absolute' alignItems='flex-end' sx={{bottom: 0, width: '100%', direction: 'rtl'}}>
            {source}
          </Box>
        </Box>
        <Box sx={controlArea} py={1}>
          <HStack spacing={2}>
            <GiDuration />
            <Text fontSize='xs' as='div'>{(
              // @ts-ignore
              moment.duration(duration, "minutes").format("h [hrs] m [min]")
            )}</Text>
            {format === 'audio' ? <GiAudioCassette /> : <GiVideoCamera />}
          </HStack>
          <Text fontSize='xs' as='div'>{date}</Text>
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