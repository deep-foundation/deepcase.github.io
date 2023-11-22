import { useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Box, Button } from './framework';

const calc: any = (x, y, w, h, l, t, xm = 1, ym = 1, zm = 1.1) => [
  -((y - t) - h / 2) / 10 * ym,
  ((x - l) - w / 2) / 10 * xm,
  zm
];
const trans: any = (x, y, s) =>
  `perspective(600px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${s})`;

export interface ICard {
  image: String;
}

export function Card({
  children, disabled, animatedProps, PaperProps,
  xm = 1, ym = 1, zm = 1.1,
  folder = false,
  paperComponent = Button,
  setRef,
  ...props
}: {
  children: any; disabled?: boolean; animatedProps?: any; PaperProps?: any;
  xm?: number; ym?: number;
  folder?: boolean;
  paperComponent?: any;
  setRef?: any;
  [prop: string]: any;
}) {
  const [hover, setHover] = useState<boolean>(false);
  const [spr, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 150, friction: 100 }
  }));
  const rootRef = useRef<any>(null);

  if (setRef) setRef.current = set;

  return (
    <Box ref={rootRef} {...props} sx={{ position: 'relative', height: '100%', width: '100%', ...props?.style }}>
      <animated.div
        onMouseMove={({ clientX, clientY, currentTarget }: any) => {
          if (disabled) return;
          const box = rootRef.current?.getBoundingClientRect();
          let x, y;
          x = clientX - box?.x, y = clientY - box?.y;
          set({ xys: calc(x, y, currentTarget.offsetWidth, currentTarget.offsetHeight, currentTarget.offsetLeft, currentTarget.offsetTop, xm, ym, zm) });
          if (!hover) setHover(true);
        }}
        onMouseLeave={() => {
          if (disabled) return;
          set({ xys: [0, 0, 1] });
          setHover(false);
        }}
        {...animatedProps}
        style={{
          transform: spr.xys.to(trans),
          height: '100%', width: '100%',
          ...animatedProps?.style,
        }}
      >
        <Box
          // boxShadow={disabled ? 'outlined' : 'base'}
          as={paperComponent}
          disabled={disabled}
          h='100%' w='100%'
          {...PaperProps}
          sx={{
            opacity: disabled ? 0.5 : 1,
            textAlign: 'left',
            borderRadius: folder ? 16 : undefined,
            ...PaperProps?.style
          }}
        >
          {children}
        </Box>
      </animated.div>
    </Box>
  );
};
