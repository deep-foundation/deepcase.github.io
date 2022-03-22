import React from "react";
import dynamic from 'next/dynamic';
const DrawSVG: any = dynamic(() => import('react-svg-drawing').then(m => m.default), { ssr: false });


export const SLetter = React.memo(() => {
  return (<DrawSVG strokeWidth="6" loop={false} width='30%' easing='easeInElastic'>
      <svg height="100%" stroke-miterlimit="10" viewBox="0 0 50 50" width="100%">
        <path d="M45.0037 13.781C45.0037 13.781 44.3612 10.3402 41.699 7.62829C39.0368 4.91635 34.4244 5.00133 34.4244 5.00133C34.4244 5.00133 21.0681 5.00133 13.5236 5.00133C10.9211 5.00133 5.91189 7.93673 5.03432 13.781C4.40839 19.9997 9.50044 25 13.5236 25.0205C21.5754 25.0615 34.4244 25.0205 34.4244 25.0205C34.4244 25.0205 45.7052 25.0205 45.0037 36.3938C43.3816 44.9468 36.2249 44.9468 34.4244 44.9468C26.5988 44.9468 22.5969 44.9468 13.5236 44.9468C12.5228 44.9468 9.81611 44.0688 7.69379 41.9305C5.57147 39.7922 5.03432 36.3938 5.03432 36.3938" fill="none" fill-rule="evenodd" opacity="1" stroke="#14024a" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
      </svg>
    </DrawSVG>
  )
})


export const TLetter = React.memo(() => {
  return (<DrawSVG strokeWidth="6" loop={false} width='30%' easing='easeInElastic'>
      <svg height="100%" stroke-miterlimit="10" viewBox="0 0 50 50" width="100%">
        <path d="M13.5236 5.00133C13.5236 5.00133 13.5236 28.4155 13.5236 29.3917C13.5236 37.312 20.0756 44.9468 29.2507 44.9468C35.7034 44.9468 42.3184 41.5293 45.0037 32.0336" fill="none" fill-rule="evenodd" opacity="1" stroke="#14024a" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
        <path d="M5.03432 13.781L25.157 13.781" fill="none" fill-rule="evenodd" opacity="1" stroke="#14024a" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
      </svg>
    </DrawSVG>
  )
})


export const ULetter = React.memo(() => {
  return (<DrawSVG strokeWidth="6" loop={false} width='30%' easing='easeInElastic'>
      <svg height="100%" stroke-miterlimit="10" viewBox="0 0 50 50" width="100%">
        <path d="M5.03432 5.00133C5.03432 5.00133 5.03432 13.781 5.03432 25.0205C5.03432 36.3938 14.1947 44.9468 25.157 44.9468C36.1194 44.9468 45.0037 36.3938 45.0037 25C45.0037 15.4305 45.0037 5.00133 45.0037 5.00133" fill="none" fill-rule="evenodd" opacity="1" stroke="#14024a" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
      </svg>
    </DrawSVG>
  )
})


export const ILetter = React.memo(() => {
  return (<DrawSVG strokeWidth="6" loop={false} width='15%' easing='easeInElastic'>
      <svg height="100%" stroke-miterlimit="10" viewBox="0 0 25 50" width="100%">
        <g>
          <path d="M9.43443 5.07715C9.43443 3.38408 10.8069 2.01158 12.5 2.01158C14.1931 2.01158 15.5656 3.38408 15.5656 5.07715C15.5656 6.77022 14.1931 8.14273 12.5 8.14273C10.8069 8.14273 9.43443 6.77022 9.43443 5.07715Z" fill="#14024a" fill-rule="evenodd" opacity="1" stroke="none"/>
          <path d="M12.5 13.781L12.5 44.9468" fill="#14024a" fill-rule="evenodd" opacity="1" stroke="#14024a" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
        </g>
      </svg>
    </DrawSVG>
  )
})
export const OLetter = React.memo(() => {
  return (<DrawSVG strokeWidth="6" loop={false} width='30%' easing='easeInElastic'>
      <svg height="100%" stroke-miterlimit="10" viewBox="0 0 50 50" width="100%">
        <path d="M5.20523 24.9531C5.20523 13.9341 14.138 5.00133 25.157 5.00133C36.1761 5.00133 45.1088 13.9341 45.1088 24.9531C45.1088 35.9722 36.1761 44.9049 25.157 44.9049C14.138 44.9049 5.20523 35.9722 5.20523 24.9531Z" fill="none" fill-rule="evenodd" opacity="1" stroke="#14024a" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
      </svg>
    </DrawSVG>
  )
})