import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path fill="#FEBA08" d="M17 17h10v10H17z" />
    <Path fill="#05A6F0" d="M5 17h10v10H5z" />
    <Path fill="#80BC06" d="M17 5h10v10H17z" />
    <Path fill="#F25325" d="M5 5h10v10H5z" />
  </Svg>
)
export default SvgComponent
