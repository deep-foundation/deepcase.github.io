import * as React from "react"

export const BoostyColor = React.memo((props) => {
  return (
    <svg
      strokeMiterlimit={10}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      clipRule="evenodd"
      width='1em'
      height='1em'
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M7.196.715l5.885.026-4.376 15.263 2.86.009-2.498 6.789 6.982-9.816-2.905-.371c2.434-6.45 2.463-6.37 2.463-6.37s3.67.508 4.853 2.9c1.183 2.391 1.162 5.373-1.151 8.747-2.527 4.01-7.384 5.206-8.397 5.294-1.724.15-3.75.126-4.461-.043-.711-.17-2.357-1.261-3.226-3.107-.869-1.847-.236-3.768-.236-3.768L7.196.715z"
        fill="#ef672b"
        fillRule="evenodd"
      />
    </svg>
  )
})

