import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={12}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m2 .3 4 4 4-4 1.6.8L6 6.7.4 1.1 2 .3Z" fill="#fff" />
  </svg>
)

export default SvgComponent
