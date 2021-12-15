import React, { useRef, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { useSpring, animated } from 'react-spring';
import { ButtonBase, makeStyles, Paper } from '@material-ui/core';

const calc: any = (x, y, w, h, l, t) => [
  -((y - t) - h / 2) / 10,
  ((x - l) - w / 2) / 10,
  1.1
];
const trans: any = (x, y, s) =>
  `perspective(600px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${s})`;

export interface ICard {
  image: String;
}

const useStyles = makeStyles(() => ({
}));

export function Card({
  children, disabled, animatedProps, PaperProps,
  folder = false,
  setRef,
  ...props
}: {
  children: any; disabled?: boolean; animatedProps?: any; PaperProps?: any;
  folder?: boolean;
  setRef?: any;
  [prop: string]: any;
}) {
  const [hover, setHover] = useState<boolean>(false);
  const [spr, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 150, friction: 100 }
  }));
  const rootRef = useRef<HTMLInputElement>();

  if (setRef) setRef.current = set;

  return (
    <div ref={rootRef} {...props} style={{ position: 'relative', height: '100%', width: '100%', ...props?.style }}>
      <animated.div
        onMouseMove={({ clientX, clientY, currentTarget }: any) => {
          if (disabled) return;
          const box = rootRef.current.getBoundingClientRect();
          let x, y;
          x = clientX - box?.x, y = clientY - box?.y;
          set({ xys: calc(x, y, currentTarget.offsetWidth, currentTarget.offsetHeight, currentTarget.offsetLeft, currentTarget.offsetTop) });
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
        <Paper
          elevation={disabled ? 0 : hover ? 4 : 1}
          variant={disabled ? 'outlined' : 'elevation'}
          component={ButtonBase}
          disabled={disabled}
          {...PaperProps}
          style={{
            opacity: disabled ? 0.5 : 1,
            height: '100%', width: '100%',
            textAlign: 'left',
            borderRadius: folder ? 16 : undefined,
            ...PaperProps?.style
          }}
        >
          {children}
        </Paper>
      </animated.div>
    </div>
  );
};
