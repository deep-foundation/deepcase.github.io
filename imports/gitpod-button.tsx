import {Box, Button } from '@chakra-ui/react';
import React from 'react';

export const GitpodButton = React.memo(() => {
  return (<Button
        as='a' 
        href='https://gitpod.io/#https://github.com/deep-foundation/dev'
        target='_blank'
        aria-label='deep-foundation dev gitpod'
        variant='ghost'
      >
      <img src='https://gitpod.io/button/open-in-gitpod.svg' alt='Open in Gitpod' />  
    </Button>
  )
});

export const GitpodButton2 = React.memo(() => {
  return (<Button
      as='a' 
      href='https://gitpod.io/#https://github.com/deep-foundation/dev'
      target='_blank'
      aria-label='deep-foundation dev gitpod'
      variant='ghost'
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        width="153" 
        height="20" 
        role="img" 
        aria-label="Gitpod: 
        ready-to-code" 
        // xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZBRTMzIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0cG9kPC90aXRsZT48cGF0aCBkPSJNMTQuMDMzIDEuMTk1YTIuMzg3IDIuMzg3IDAgMCAxLS44NyAzLjIzNWwtNi45OCA0LjA0YS42MDIuNjAyIDAgMCAwLS4zLjUyMnY2LjM0MmEuNi42IDAgMCAwIC4zLjUyMWw1LjUyNCAzLjE5OWEuNTg1LjU4NSAwIDAgMCAuNTg2IDBsNS41MjctMy4xOTlhLjYwMy42MDMgMCAwIDAgLjI5OS0uNTJWMTEuMzlsLTQuOTY5IDIuODM4YTIuMzI2IDIuMzI2IDAgMCAxLTMuMTktLjkgMi4zODggMi4zODggMCAwIDEgLjg5LTMuMjNsNy4xMDgtNC4wNjJDMjAuMTIzIDQuOCAyMi44IDYuMzg0IDIyLjggOC45MDF2Ni45MTRhNC41MjQgNC41MjQgMCAwIDEtMi4yNDUgMy45MTlsLTYuMzQ1IDMuNjcyYTQuNDA3IDQuNDA3IDAgMCAxLTQuNDIyIDBsLTYuMzQ0LTMuNjcyQTQuNTI0IDQuNTI0IDAgMCAxIDEuMiAxNS44MTZWOC41MWE0LjUyNCA0LjUyNCAwIDAgMSAyLjI0NS0zLjkxOGw3LjM5My00LjI4YTIuMzI2IDIuMzI2IDAgMCAxIDMuMTk1Ljg4M3oiLz48L3N2Zz4="
      >
          <title>Gitpod: ready-to-code</title>
          <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
            <stop offset="1" stop-opacity=".1"/>
          </linearGradient>
          <clipPath id="r"><rect width="153" height="20" rx="3" fill="#fff"/></clipPath>
          <g clip-path="url(#r)">
            <rect width="64" height="20" fill="#555"/>
            <rect x="64" width="89" height="20" fill="#007ec6"/>
            <rect width="153" height="20" fill="url(#s)"/>
          </g>
          <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
            <image x="5" y="3" width="14" height="14" href="gitpod.svg" />
            <text aria-hidden="true" x="415" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="370">Gitpod</text>
            <text x="415" y="140" transform="scale(.1)" fill="#fff" textLength="370">Gitpod</text>
            <text aria-hidden="true" x="1075" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="790">ready-to-code</text>
            <text x="1075" y="140" transform="scale(.1)" fill="#fff" textLength="790">ready-to-code</text>
          </g>
        </svg>
    </Button>
  )
});
