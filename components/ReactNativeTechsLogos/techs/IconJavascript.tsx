import Svg, { SvgProps, G, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path fill="#F1DC50" d="M0 0h24v24H0z" />
      <Path
        stroke="#333"
        strokeWidth={2}
        d="M12 11v8c0 .876-.523 2-2 2-2.385 0-2.5-2-2.5-2m13.29-5.484c-.6-1.01-1.396-1.516-2.386-1.516C16.856 12 16 13 16 14s.5 2 2.508 2.5c1.278.318 2.492 1 2.492 2.5s-1.315 2-2.5 2c-1.514 0-2.514-.667-3-2"
      />
    </G>
  </Svg>
)
export default SvgComponent
