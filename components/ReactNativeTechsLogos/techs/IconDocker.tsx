import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    aria-label="Docker"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      stroke="#066da5"
      strokeWidth={38}
      d="M296 226h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42"
    />
    <Path
      fill="#066da5"
      d="M472 228s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39"
    />
  </Svg>
)
export default SvgComponent