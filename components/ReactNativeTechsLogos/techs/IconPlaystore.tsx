import Svg, {
  SvgProps,
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Mask
      id="a"
      width={24}
      height={26}
      x={7}
      y={3}
      maskUnits="userSpaceOnUse"
    >
      <Path
        fill="#C4C4C4"
        d="M30.048 14.4a1.82 1.82 0 0 1 0 3.2L9.756 28.766c-1.235.68-2.756-.203-2.756-1.6V4.834c0-1.397 1.52-2.28 2.756-1.6L30.048 14.4Z"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="url(#b)"
        d="m7.635 28.547 12.657-12.73L7.843 3.3A1.807 1.807 0 0 0 7 4.834v22.332c0 .57.252 1.053.635 1.38Z"
      />
      <Path
        fill="url(#c)"
        d="M30.048 14.4a1.82 1.82 0 0 1 0 3.2l-5.12 2.816-4.636-4.598 4.4-4.365 5.356 2.947Z"
      />
      <Path
        fill="url(#d)"
        d="m24.93 20.417-4.638-4.6-12.657 12.73c.556.476 1.389.622 2.121.219l15.173-8.35Z"
      />
      <Path
        fill="url(#e)"
        d="m7.843 3.299 12.449 12.519 4.4-4.365L9.756 3.234a1.859 1.859 0 0 0-1.913.065Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={15.677}
        x2={7.071}
        y1={10.874}
        y2={19.551}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00C3FF" />
        <Stop offset={1} stopColor="#1BE2FA" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={20.292}
        x2={31.738}
        y1={15.818}
        y2={15.818}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCE00" />
        <Stop offset={1} stopColor="#FFEA00" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={7.369}
        x2={22.595}
        y1={30.1}
        y2={17.894}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DE2453" />
        <Stop offset={1} stopColor="#FE3944" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={8.107}
        x2={22.597}
        y1={1.901}
        y2={13.736}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#11D574" />
        <Stop offset={1} stopColor="#01F176" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
