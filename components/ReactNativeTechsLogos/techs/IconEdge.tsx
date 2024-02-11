import Svg, {
  SvgProps,
  RadialGradient,
  Stop,
  LinearGradient,
  Path,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    aria-label="Edge"
    viewBox="0 0 512 512"
    {...props}
  >
    <RadialGradient id="a" cx={0.6} cy={0.5}>
      <Stop offset={0.8} stopColor="#148" />
      <Stop offset={1} stopColor="#137" />
    </RadialGradient>
    <RadialGradient id="b" cx={0.5} cy={0.6} fx={0.2} fy={0.6}>
      <Stop offset={0.8} stopColor="#38c" />
      <Stop offset={1} stopColor="#269" />
    </RadialGradient>
    <LinearGradient id="c" y1={0.5} y2={1}>
      <Stop offset={0.1} stopColor="#5ad" />
      <Stop offset={0.6} stopColor="#5c8" />
      <Stop offset={0.8} stopColor="#7d5" />
    </LinearGradient>
    <Path
      fill="url(#a)"
      d="M439 374c-50 77-131 98-163 96-191-9-162-262-47-261-82 52 30 224 195 157 17-12 20 3 15 8"
    />
    <Path
      fill="url(#b)"
      d="M311 255c18-82-31-135-129-135S38 212 38 259c0 124 125 253 287 203-134 39-214-116-146-210 46-66 123-68 132 3M411 99h1"
    />
    <Path
      fill="url(#c)"
      d="M39 253C51-15 419-30 472 202c14 107-86 149-166 115-42-26 26-20-3-99-48-112-251-103-264 35"
    />
  </Svg>
)
export default SvgComponent
