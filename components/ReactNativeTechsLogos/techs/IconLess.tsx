import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    preserveAspectRatio="xMidYMid"
    viewBox="0 -17.5 256 256"
    {...props}
  >
    <Path
      fill="#41B883"
      d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"
    />
    <Path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" />
    <Path
      fill="#35495E"
      d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"
    />
  </Svg>
)
export default SvgComponent
