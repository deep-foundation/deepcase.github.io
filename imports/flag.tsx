import { useSpring as useSpringMotion } from 'framer-motion';
import { memo, useRef } from 'react';
import { a, useSpring } from 'react-spring';
import { Tower } from './flags-icons/tower';
import { Box, GravityCard, Img, Text, useMediaQuery } from './framework';
import { H5 } from './headers';
import { Space } from './space';


const transTitle = (x, y) => `translate3d(${x / 4}px,${(y / 16) * 0.1}px,0)`;
const transDescription = (x, y) => `translate3d(${x / -5}px,${(y / 7) * 0.1}px,0)`;
const transDashedBorder = (x, y) => `translate3d(${x / 12}px,${(y / 16) * 0.1}px,0)`;
const transDashedBorderCorner = (x, y) => `translate3d(${x / 12}px,${(y / 16) * 0.1}px,0) rotate(45deg)`;
const transArrowBorderCorner = (x, y) => `translate3d(${x / -20}px,${x / 20}px,0)`;
const transTopLine = (x, y) => `translate3d(${x / -20}px,${(y / -20) * 0.1}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 12}px,${(y / 12) * 0.1}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 18}px,${(y / 18) * 0.1}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 8}px,${(y / 8) * 0.1}px,0)`;

export const Flag = memo(({
  title,
  description,
  boxProps,
  icon1,
  icon2,
  icon3,
  fullText,
  Icon = Tower,
  ...props
}:{
  title: string;
  description?: string;
  boxProps?: any;
  icon1?: any;
  icon2?: any;
  icon3?: any;
  fullText?: any;
  Icon?: any;
  [prop: string]: any;
}) => {
  var xMotion = useSpringMotion(0, { stiffness: 150, damping: 40 });
  var yMotion = useSpringMotion(0, { stiffness: 200 });

  const [spring, set] = useSpring(() => ({ xy: [0, 0], borderColor: '#393d40', config: { mass: 10, tension: 550, friction: 140 } }));
  const ref = useRef<any>();
  const setRef = useRef<any>();

  const localCalc = (x, y) => {
    const box = ref?.current?.getBoundingClientRect();
    return [x - (box.left + (box.width / 2)), y - (box.top + (box.height / 1.7))];
  };
  const [min1960] = useMediaQuery('min-width: 1960px');
  const [max850] = useMediaQuery('max-width: 850px');

  return (<GravityCard paperComponent='div' setRef={setRef} ym={0.1} xm={-0.9} {...props}>
      <Box 
        w='100%' 
        pos='relative' 
        ref={ref} 
        onMouseMove={({ clientX, clientY }) => {
          set({ xy: localCalc(clientX, clientY), borderColor: '#00a9f4' });
          (xMotion.set(localCalc(clientX, clientY)[0]), yMotion.set(localCalc(clientX, clientY)[1]));
        }} 
        onMouseLeave={() => {
          set({ xy: [0,0], borderColor: '#393d40' });
          (xMotion.set(0), yMotion.set(0));
        }} 
      >
        <Box 
          w='120%' 
          pos='relative' 
          left='-10%'
          boxSizing='border-box'
          overflow='hidden' 
          px={3}
          pt={9}
          pb={0}
        >
          <Box width='90%' left='5%' position='relative'>
            <Box 
              pos='absolute'
              boxShadow='0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)'
              borderRadius={5}
              p={0}
              h='100%'
              w='94.5%'
              top='3%'
              left='2.5%'
              bg='dark'
            />
            <Box 
              w='100%'
              overflow='hidden'
              display='flex'
              flexDir='column'
              justifyContent='flex-start'
              alignItems='center'
              borderRadius={5}
              pt='13rem'
              px={min1960 ? '2rem' : '1rem'}
              boxSizing='border-box'
              {...boxProps}
            >
              <a.div 
                style={{
                  background: '#00a9f4',
                  position: 'absolute',
                  top: 20, left: 20,
                  width: 'calc(100% - 40px)',
                  height: 10,
                  transform: spring.xy.to(transTopLine), backgroundColor: spring.borderColor
                }} />
              <a.div style={{ padding: '0 16px', transform: spring.xy.to(transTitle) }}>
                <H5 align='center' w='calc(100% - 4px)' m='0 auto'>{title}</H5>
              </a.div>
              <Space unit={1.5} />
              <a.div style={{ transform: spring.xy.to(transDescription), padding: '0 1em' }}>
                <Text textStyle='Regular20' align='center'>{description}</Text>
              </a.div>
            </Box>
            <Box 
              pos='absolute' 
              left='-25%' 
              top={0} 
              w='150%' 
              h='100%' 
              overflow='hidden'
            >
              <a.div 
                style={{ 
                  border: '1px dashed transparent',
                  position: 'absolute',
                  top: '2.8%',
                  left: 'calc(2.4% + 15.8%)',
                  borderRadius: 5,
                  padding: 0,
                  height: '100%',
                  width: 'calc(94.5% - 31.3%)',
                  transform: spring.xy.to(transDashedBorder), borderColor: spring.borderColor 
                }}>
                <Box pos='absolute' top='2.8%' left='calc(2.4% + 15.8%)' borderRadius={5} p={0} h='100%' w='calc(94.2% - 31.3%)' />
              </a.div>
            </Box>
          </Box>
        </Box>
        <Box 
          pos='absolute'
          top='4rem'
          left={0}
          w='100%'
          display='flex'
          flexDir='column'
          justifyContent='center'
          alignItems='center'
        >
          <Box pos="relative" mt="1em">
            <Icon 
              xM={xMotion}
              yM={yMotion}
            />
            {/* <Box opacity={0} boxSizing='border-box'>
              {icon1}
            </Box>
            <a.div style={{ position: 'absolute', top: 0, left: '50%', width: '7rem', boxSizing: 'border-box', transform: spring.xy.to(trans3) }}>
              {icon1}
            </a.div>
            <a.div style={{ position: 'absolute', top: 0, left: '50%', width: '7rem', boxSizing: 'border-box', transform: spring.xy.to(trans4) }}>
              {icon2}
            </a.div>
            <a.div style={{ position: 'absolute', top: 0, left: '50%', width: '7rem', boxSizing: 'border-box', transform: spring.xy.to(trans5) }}>
              {icon3}
            </a.div> */}
          </Box>
        </Box>
        <Box>
          <Box 
            pos='relative'
            left='-26.8%' top={0}
            overflow='hidden'
            w='153.5%' h='50%'
          >
            <Box left="16.65%" w="calc(67% - 22.3%)" pos="relative">
              <Img htmlWidth='100%' htmlHeight='100%' src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt='px'/>
              <Box 
                bg='dark'
                w='100%'
                h='100%'
                boxShadow='0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)' 
                borderRadius={5}
                pos='absolute'
                top='-50.5%'
                left='24.35%'
                transform='rotate(45deg)'
                overflow='hidden'
              >
                <Box 
                  position='absolute'
                  left='-100%' top='-100%'
                  w='300%'
                  h='300%'
                  bgPosition='left'
                >
                  <a.div 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      border: '10px inset #00a9f4', 
                      borderRadius: 5,
                      position: 'absolute',
                      boxSizing: 'border-box',
                      top: '-35%',
                      left: '-35%',
                      overflow: 'hidden',
                      transform: spring.xy.to(transArrowBorderCorner), borderColor: spring.borderColor
                    }}
                  >
                    <Box pos="absolute" left="-100%" top="-100%" w="300%" h="300%" transform="rotate(-45deg)" bgPosition="left" />
                  </a.div>
                </Box>
              </Box>
              <a.div 
                style={{
                  width: '100%',
                  height: '100%',
                  border: '1px dashed transparent', 
                  borderRadius: 5,
                  position: 'absolute',
                  top: '-50%',
                  left: '24.4%',
                  overflow: 'hidden',
                  transform: spring.xy.to(transDashedBorderCorner), borderColor: spring.borderColor 
                }}
              >
                <Box pos="absolute" left="-100%" top="-100%" w="300%" h="300%" transform="rotate(-45deg)" bgPosition="left" />
              </a.div>
            </Box>
          </Box>
        </Box>
      </Box>
    </GravityCard>
  )
})