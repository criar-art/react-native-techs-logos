import Svg, {
  SvgProps,
  Path,
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
    <Path
      fill="url(#a)"
      d="M21.002 3.117c0-.88-.985-.88-1.422-.77.612-.483 1.33-.366 1.586-.219l5.913 2.9c.563.276.92.85.92 1.48v19.075c0 .639-.366 1.22-.941 1.491l-5.564 2.631c-.383.165-1.214.572-1.914 0 .875.165 1.349-.457 1.422-.879V3.116Z"
    />
    <Path
      fill="url(#b)"
      d="M19.651 2.332c.464-.092 1.35-.05 1.35.785v6.566L3.075 23.245a.763.763 0 0 1-1.022-.09l-1.847-2a.772.772 0 0 1 .045-1.092L19.58 2.348l.071-.016Z"
    />
    <Path
      fill="url(#c)"
      d="M21.002 22.37 3.074 8.809a.763.763 0 0 0-1.022.091l-1.847 2A.772.772 0 0 0 .25 11.99l19.33 17.716c.875.164 1.349-.458 1.422-.88v-6.455Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={23.79}
        x2={23.79}
        y1={2}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#32B5F1" />
        <Stop offset={1} stopColor="#2B9FED" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={21.002}
        x2={1.022}
        y1={5.534}
        y2={22.305}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0F6FB3" />
        <Stop offset={0.271} stopColor="#1279B7" />
        <Stop offset={0.421} stopColor="#1176B5" />
        <Stop offset={0.618} stopColor="#0E69AC" />
        <Stop offset={0.855} stopColor="#0F70AF" />
        <Stop offset={1} stopColor="#0F6DAD" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={1.155}
        x2={21.079}
        y1={9.984}
        y2={26.481}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1791D2" />
        <Stop offset={1} stopColor="#1173C5" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
