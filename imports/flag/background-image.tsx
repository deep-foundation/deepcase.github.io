import { Box, Img, useColorMode } from "@chakra-ui/react";
import { memo } from "react";

export const BackgroundImage = memo(function BackgroundImage({
  src = '/gradient.webp',
  alt,
  ...props
}: {
  src?: string;
  alt?: string;
}) {
  const {colorMode} = useColorMode();

  return (<Box sx={{
      position: 'relative',
      height: '100%',
      overflow: 'hidden', 
      borderRadius: '0.5rem', 
      borderImageWidth: '0.1rem',
      borderImageSlice: 1,
      borderImageSource: colorMode === 'light' ? 'linear-gradient(38deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)' : 'none',
    }}>
      {colorMode === 'dark' ? <Img src={src} alt={alt} w='calc(100% - 1px)' h='calc(100% - 1px)' sx={{position: 'absolute'}} /> : null} 
    </Box>
  );
});

export const BackgroundGradient = memo(function BackgroundImage({
  src = '/gradient.webp',
  alt,
  ...props
}: {
  src?: string;
  alt?: string;
}) {
  const {colorMode} = useColorMode();

  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <linearGradient id='a' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#ff52e4'>
            <animate attributeName="stop-color" values="#ff52e4;#6464ce;#3bbeff;#ff52e4;" dur="20s" repeatCount="indefinite" />
          </stop>
          <stop offset='.35' stop-color='#6464ce;'>
            <animate attributeName="stop-color" values="#6464ce;#3bbeff;#ff52e4;#6464ce;" dur="20s" repeatCount="indefinite" />
          </stop>
          <stop offset='1' stop-color='#3bbeff'>
            <animate attributeName="stop-color" values="#3bbeff;#ff52e4;#6464ce;#3bbeff;" dur="20s" repeatCount="indefinite" />
          </stop>
          <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5" dur="20s" repeatCount="indefinite" />
        </linearGradient>
        <linearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='1'>
          <stop offset='0' stop-color='#ff52e4'>
            <animate attributeName="stop-color" values="#ff52e4;#6464ce;#3bbeff;#ff52e4;" dur="20s" repeatCount="indefinite" />
          </stop>
          <stop offset='.35' stop-color='#6464ce;'>
            <animate attributeName="stop-color" values="#6464ce;#3bbeff;#ff52e4;#6464ce;" dur="20s" repeatCount="indefinite" />
          </stop>
          <animateTransform attributeName="gradientTransform" type="rotate" values="360 .5 .5;0 .5 .5" dur="10s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect fill='url(#a)' width='100%' height='100%' />
      <rect fill='url(#b)' width='100%' height='100%' />
    </svg>
  );
});

export const BackgroundGradientGold = memo(function BackgroundImage({
  src = '/gradient.webp',
  alt,
  ...props
}: {
  src?: string;
  alt?: string;
}) {

  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <defs>
        <linearGradient id='a' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#eead13'>
            <animate attributeName="stop-color" values="#eead13;#ffffff;#ffe1a8;#eead13;" dur="20s" repeatCount="indefinite" />
          </stop>
          <stop offset='.35' stop-color='#ffe1a8;'>
            <animate attributeName="stop-color" values="#ffe1a8;#ffffff;#eead13;#ffe1a8;" dur="20s" repeatCount="indefinite" />
          </stop>
          <stop offset='1' stop-color='#ffffff;'>
            <animate attributeName="stop-color" values="#ffffff;#ffe1a8;#eead13;#ffffff;" dur="20s" repeatCount="indefinite" />
          </stop>
          <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5" dur="20s" repeatCount="indefinite" />
        </linearGradient>
        <linearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='1'>
          <stop offset='0' stop-color='#eead13'>
            <animate attributeName="stop-color" values="#eead13;#ffffff;#ffe1a8;#eead13;" dur="20s" repeatCount="indefinite" />
          </stop>
          <stop offset='.35' stop-color='#ffffff;'>
            <animate attributeName="stop-color" values="#ffffff;#ffe1a8;#eead13;#ffffff;" dur="20s" repeatCount="indefinite" />
          </stop>
          <animateTransform attributeName="gradientTransform" type="rotate" values="360 .5 .5;0 .5 .5" dur="10s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect fill='url(#a)' width='100%' height='100%' />
      <rect fill='url(#b)' width='100%' height='100%' />
    </svg>
  );
});