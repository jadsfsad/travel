import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={14}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 .125A6.195 6.195 0 0 0 .813 6.313a6.125 6.125 0 0 0 1.246 3.712s.169.222.196.254L7 15.875l4.747-5.599c.025-.03.194-.251.194-.251v-.002a6.123 6.123 0 0 0 1.246-3.71A6.195 6.195 0 0 0 7 .125Zm0 8.438a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
