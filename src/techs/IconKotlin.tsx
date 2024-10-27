import Svg, {
  type SvgProps,
  Defs,
  RadialGradient,
  Stop,
  Path,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 48 48" {...props}>
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-48 0 0 -48 48 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E44857" />
        <Stop offset={0.504} stopColor="#C711E1" />
        <Stop offset={1} stopColor="#7F52FF" />
      </RadialGradient>
    </Defs>
    <Path fill="url(#a)" d="M48 48H0V0h48L23.505 23.648 48 48Z" />
  </Svg>
);
export default SvgComponent;
