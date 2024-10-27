import Svg, {
  type SvgProps,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 70 70" {...props}>
    <LinearGradient
      id="a"
      x1={0.79}
      x2={33.317}
      y1={40.089}
      y2={40.089}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0.258} stopColor="#f97a12" />
      <Stop offset={0.459} stopColor="#b07b58" />
      <Stop offset={0.724} stopColor="#577bae" />
      <Stop offset={0.91} stopColor="#1e7ce5" />
      <Stop offset={1} stopColor="#087cfa" />
    </LinearGradient>
    <Path fill="url(#a)" d="M17.7 54.6.8 41.2l8.4-15.6L33.3 35z" />
    <LinearGradient
      id="b"
      x1={25.767}
      x2={79.424}
      y1={24.88}
      y2={54.57}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#f97a12" />
      <Stop offset={0.072} stopColor="#cb7a3e" />
      <Stop offset={0.154} stopColor="#9e7b6a" />
      <Stop offset={0.242} stopColor="#757b91" />
      <Stop offset={0.334} stopColor="#537bb1" />
      <Stop offset={0.432} stopColor="#387ccc" />
      <Stop offset={0.538} stopColor="#237ce0" />
      <Stop offset={0.655} stopColor="#147cef" />
      <Stop offset={0.792} stopColor="#0b7cf7" />
      <Stop offset={1} stopColor="#087cfa" />
    </LinearGradient>
    <Path
      fill="url(#b)"
      d="m70 18.7-1.3 40.5L41.8 70 25.6 59.6 49.3 35 38.9 12.3l9.3-11.2z"
    />
    <LinearGradient
      id="c"
      x1={63.228}
      x2={48.29}
      y1={42.915}
      y2={-1.719}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#fe315d" />
      <Stop offset={0.078} stopColor="#cb417e" />
      <Stop offset={0.16} stopColor="#9e4e9b" />
      <Stop offset={0.247} stopColor="#755bb4" />
      <Stop offset={0.339} stopColor="#5365ca" />
      <Stop offset={0.436} stopColor="#386ddb" />
      <Stop offset={0.541} stopColor="#2374e9" />
      <Stop offset={0.658} stopColor="#1478f3" />
      <Stop offset={0.794} stopColor="#0b7bf8" />
      <Stop offset={1} stopColor="#087cfa" />
    </LinearGradient>
    <Path fill="url(#c)" d="M70 18.7 48.7 43.9l-9.8-31.6 9.3-11.2z" />
    <LinearGradient
      id="d"
      x1={10.72}
      x2={55.524}
      y1={16.473}
      y2={90.58}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#fe315d" />
      <Stop offset={0.04} stopColor="#f63462" />
      <Stop offset={0.104} stopColor="#df3a71" />
      <Stop offset={0.167} stopColor="#c24383" />
      <Stop offset={0.291} stopColor="#ad4a91" />
      <Stop offset={0.55} stopColor="#755bb4" />
      <Stop offset={0.917} stopColor="#1d76ed" />
      <Stop offset={1} stopColor="#087cfa" />
    </LinearGradient>
    <Path
      fill="url(#d)"
      d="M33.7 58.1 5.6 68.3l4.5-15.8L16 33.1 0 27.7 10.1 0l22 2.7 21.6 24.7z"
    />
    <Path d="M13.7 13.5h43.2v43.2H13.7z" />
    <Path
      fill="#fff"
      d="M17.7 48.6h16.2v2.7H17.7zm11.7-26.2v-3.3h-9v3.3H23v11.3h-2.6V37h9v-3.3h-2.5V22.4zM38 37.3c-1.4 0-2.6-.3-3.5-.8-.9-.5-1.7-1.2-2.3-1.9l2.5-2.8c.5.6 1 1 1.5 1.3.5.3 1.1.5 1.7.5.7 0 1.3-.2 1.8-.7.4-.5.6-1.2.6-2.3V19.1h4v11.7c0 1.1-.1 2-.4 2.8-.3.8-.7 1.4-1.3 2-.5.5-1.2 1-2 1.2-.8.3-1.6.5-2.6.5"
    />
  </Svg>
);
export default SvgComponent;
