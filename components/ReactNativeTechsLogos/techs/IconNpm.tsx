import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path fill="#CB3837" d="M0 10v10h9v2h7v-2h16V10H0Z" />
    <Path
      fill="#fff"
      d="M5.462 12H2v6h3.462v-4.389h1.761V18h1.762v-6H5.462Zm5.284 0v8h3.523v-2h3.462v-6h-6.985Zm5.224 4.389h-1.701V13.61h1.7v2.778ZM22.954 12h-3.462v6h3.462v-4.389h1.762V18h1.761v-4.389h1.762V18H30v-6h-7.046Z"
    />
  </Svg>
)
export default SvgComponent
