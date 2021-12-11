import React from "react";

export const Play = ({
  color = '#fff',
  width = 18,
  height = 18,
}:{
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        isolation: "isolate"
      }}
      viewBox="0 0 42 42"
      width={width}
      height={height}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0H42V42H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <mask id="b">
          <path
            d="M.463 39.529v-37c0-1.104.802-1.599 1.79-1.106l18.739 9.356 18.739 9.357c.987.493.987 1.294 0 1.787l-18.739 9.356-18.739 9.357c-.988.493-1.79-.003-1.79-1.107z"
            fill={color}
          />
        </mask>
        <path
          d="M.463 39.529v-37c0-1.104.802-1.599 1.79-1.106l18.739 9.356 18.739 9.357c.987.493.987 1.294 0 1.787l-18.739 9.356-18.739 9.357c-.988.493-1.79-.003-1.79-1.107z"
          fill="none"
        />
        <path
          d="M.463 39.529v-37c0-1.104.802-1.599 1.79-1.106l18.739 9.356 18.739 9.357c.987.493.987 1.294 0 1.787l-18.739 9.356-18.739 9.357c-.988.493-1.79-.003-1.79-1.107z"
          fill="none"
          mask="url(#b)"
          vectorEffect="non-scaling-stroke"
          strokeWidth={2}
          stroke={color}
          strokeLinecap="square"
          strokeMiterlimit={3}
        />
      </g>
    </svg>
  )
}