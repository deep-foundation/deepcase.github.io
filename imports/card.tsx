import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { useSpring, animated } from 'react-spring';
import { makeStyles, Paper } from '@material-ui/core';

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

export function Card({ children, disabled, ...props }: { children: any; disabled?: boolean; [prop: string]: any; }) {
  const [hover, setHover] = React.useState(false);
  const [spr, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 150, friction: 100 }
  }));

  return (
    <animated.div
      onMouseMove={({ pageX: x, pageY: y, currentTarget }: any) => {
        if (disabled) return;
        set({ xys: calc(x, y, currentTarget.offsetWidth, currentTarget.offsetHeight, currentTarget.offsetLeft, currentTarget.offsetTop) });
        if (!hover) setHover(true);
      }}
      onMouseLeave={() => {
        if (disabled) return;
        set({ xys: [0, 0, 1] });
        setHover(false);
      }}
      style={{
        transform: spr.xys.interpolate(trans),
      }}
    >
      <Paper
        elevation={hover ? 4 : 1}
        {...props}
        style={{
          opacity: disabled ? 0.5 : 1,
          ...props?.style,
        }}
      >
        {children}
      </Paper>
    </animated.div>
  );
};
