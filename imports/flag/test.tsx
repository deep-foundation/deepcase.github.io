async ({ deep, require }) => {
    const React = require('react');
  const { Box, Img, useColorMode } = require('@chakra-ui/react');
  const { motion, useMotionValue, useSpring, useTransform } = require('framer-motion');
  const { useRef } = require('react');
  const { ClientHandler } = require('@deep-foundation/deepcase');
  const transition = {
      type: \"spring\", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
  };
  const BoxShadowHandlerId = await deep.id('@deep-foundation/site', 'BoxShadowHandler');
  const DeepFrameMouseShift = React.memo<any>(({
      blockWidth = 300,
      blockHeight = 300,
      onTapButton,
      children,
      ...props
  }:{
      blockWidth?: number;
      blockHeight?: number;
      onTapButton?: () => any;
      children: any;
      [key:string]: any;
  }) => {
      const ref = useRef<any>();
      const viewRef = useRef<any>();
      const CENTER = 225;

      const x = useMotionValue(CENTER);
      const y = useMotionValue(CENTER);
      const springX = useSpring(x, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
    const springY = useSpring(y, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });

    const shiftX = useTransform(springX, [0, 450], [-45, 45]);
    const shiftY = useTransform(springY, [0, 450], [-45, 45]);
    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        // const rect = viewRef.current?.getBoundingClientRect();
      x.set((event.clientX - (rect.left)));
      y.set(event.clientY - (rect.top));
      // x.set(event.clientX - (rect.left / 2));
      // y.set(event.clientY - (rect.top / 2));
    }
    function handleMouseLeave({x: nx, y: ny}) {
        x.set(nx);
      y.set(ny);
    }
    const { colorMode } = useColorMode();
    const variants = {
        start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1], transition },
      hoverState: {
          boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 2px  #00000026', transition },
      tapState: { boxShadow: '0 0px 4px 0 #0000001a', transition },
    };
    return (<motion.div
        // ref={ref}
        style={{
            width: 450,
          height: 450,
          display: \"flex\",
          placeItems: \"center\",
          placeContent: \"center\",
          overflow: 'hidden',
        }}
        onMouseMove={(event) => {
          handleMouse(event);
        (xMotion.set(localCalc(event.clientX, event.clientY)[0]), yMotion.set(localCalc(event.clientX, event.clientY)[1]));
        }}
        onMouseLeave={() => {
          handleMouseLeave({ x: CENTER, y: CENTER });
          xMotion.set(CENTER);
        yMotion.set(CENTER);
        }}
        onViewportLeave={inViewport}
        >
        <Box
          sx={{
              width: 300,
            height: 300,
            position: 'relative',
            borderRadius: '0.4rem',
          }}
        >
          <Box sx={{
              position: 'relative',
            height: '100%',
            overflow: 'hidden', 
            borderRadius: '0.3rem', 
            borderImageWidth: '0.1rem',
            borderImageSlice: 1,
            borderImageSource: colorMode === 'light' ? 'linear-gradient(38deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)' : 'none',
            // borderColor: '#'
            // border: colorMode === 'dark' ? 'none' : 'thin solid linear-gradient(38deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)'
          }}>
            {colorMode === 'dark' ? <Img src='/gradient.webp' w='calc(100% - 1px)' h='calc(100% - 1px)' sx={{position: 'absolute'}} /> : null} 
          </Box>
          <ClientHandler handlerId={BoxShadowHandlerId}
            styles={{ 
                x: shiftX,
              y: shiftY,
              top: 0,
              left: 0,
            }}
            position='absolute'
            onMouseRef={viewRef}
          >
            <Box bg='flagBackground' w='100%' h='100%'>
              {children || (<Box bg='red' w='100%' h='100%'/>)}
            </Box>
          </ClientHandler>
        </Box>
      </motion.div>
    )
  });
  return (props) => <DeepFrameMouseShift {...props}/>;
}"
      }