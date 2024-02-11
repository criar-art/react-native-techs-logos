import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 300 160"
    {...props}
  >
    <Path
      fill="#3dda84"
      d="M200.2 111.7c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6m-105.7 0c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6m109.1-57.6L222.8 21c1.1-1.9.4-4.3-1.5-5.4s-4.3-.4-5.4 1.5l-19.4 33.5C181.7 43.8 165.1 40 147.4 40S113 43.8 98.2 50.5L78.8 17c-1.1-1.9-3.5-2.6-5.4-1.5s-2.6 3.5-1.5 5.4L91 54c-32.8 17.9-55.3 51.1-58.6 90.4h229.7c-3.2-39.2-25.6-72.4-58.5-90.3"
    />
  </Svg>
)
export default SvgComponent
