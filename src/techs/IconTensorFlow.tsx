import Svg, {
  Defs,
  Path,
  ClipPath,
  Use,
  G,
  LinearGradient,
  Stop,
  type SvgProps,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 50 54" {...props}>
    <Defs>
      <Path
        id="a"
        d="M47.5 17.6 25 4.8v52.6l9-5.2V37.4l6.8 3.9-.1-10.1-6.7-3.9v-5.9l13.5 7.9z"
      />
    </Defs>
    <ClipPath id="b">
      <Use xlinkHref="#a" />
    </ClipPath>
    <G clipPath="url(#b)">
      <LinearGradient
        id="c"
        x1={-1.6}
        x2={53.6}
        y1={335.05}
        y2={335.05}
        gradientTransform="translate(0 -304)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#ff6f00" />
        <Stop offset={1} stopColor="#ffa800" />
      </LinearGradient>
      <Path fill="url(#c)" d="M-1.6 4.6h55.2v52.9H-1.6V4.6z" />
    </G>
    <Defs>
      <Path id="d" d="M.5 17.6 23 4.8v52.6l-9-5.2V21.4L.5 29.3z" />
    </Defs>
    <ClipPath id="e">
      <Use xlinkHref="#d" />
    </ClipPath>
    <G clipPath="url(#e)">
      <LinearGradient
        id="f"
        x1={-1.9}
        x2={53.3}
        y1={335.05}
        y2={335.05}
        gradientTransform="translate(0 -304)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#ff6f00" />
        <Stop offset={1} stopColor="#ffa800" />
      </LinearGradient>
      <Path fill="url(#f)" d="M-1.9 4.6h55.2v52.9H-1.9V4.6z" />
    </G>
  </Svg>
);
export default SvgComponent;
