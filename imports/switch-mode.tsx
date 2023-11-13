import { Box, Button, useColorMode } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { memo, useCallback, useEffect } from 'react';
// @ts-ignore
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const MotionBox = motion(Box);

export const Switch = memo(function Switch() {
  const {colorMode, toggleColorMode} = useColorMode();
  const lightControls = useAnimation();
  const darkControls = useAnimation();

 useEffect(() => {
    if (colorMode === 'dark') {
      lightControls.start({ opacity: 0, y: 0, rotate: -30, scale: 0.1 });
      darkControls.start({ opacity: 1, y: '-1em', x: '-0.2em', scale: 1, rotate: 0 });
    } else {
      lightControls.start({ opacity: 1, y: '-1em', x: '-0.2em', rotate: 0, scale: 1 });
      darkControls.start({ opacity: 0, y: 0, rotate: -30, scale: 0.1 });
    }
  }, [colorMode, lightControls, darkControls]);

  const handleToggleColorMode = useCallback(() => {
    toggleColorMode();
  }, [colorMode, lightControls, darkControls]);

  return (
    <Box as="label" right='1rem'>
      <Button
        aria-label="Toggle Dark Mode"
        onClick={handleToggleColorMode}
        borderRadius="full"
        variant="ghost"
        borderColor='switchModeBorder'
        borderWidth='thin'
        pos='relative'
        bg='colorModeButton'
        _hover={{ bg: 'colorModeButton' }}
        size='sm'
      >
        <Box pos="relative" zIndex="1">
          <MotionBox
            viewBox="0 0 12 12"
            aria-hidden="true"
            aria-label="light mode"
            animate={lightControls}
            transition={{ duration: 0.9 }}
            pos="absolute"
            top="0.15rem"
            left="-0.3rem"
            width="0.75em"
            height="0.75em"
          >
            <MoonIcon color='blue.200' width='1rem' />
          </MotionBox>
          <MotionBox
            viewBox="0 0 12 12"
            aria-hidden="true"
            aria-label="dark mode"
            animate={darkControls}
            transition={{ duration: 0.9 }}
            pos="absolute"
            top="0.15rem"
            left="-0.3rem"
            width="0.75em"
            height="0.75em"
          >
            <SunIcon color='blue.500' width='1rem' />
          </MotionBox>
        </Box>
      </Button>
    </Box>
  );
});