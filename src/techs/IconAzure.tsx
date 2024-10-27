import Svg, {
  type SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 96 96" {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={-1032.172}
        x2={-1059.213}
        y1={145.312}
        y2={65.426}
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#114a8b" />
        <Stop offset={1} stopColor="#0669bc" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={-1023.725}
        x2={-1029.98}
        y1={108.083}
        y2={105.968}
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopOpacity={0.3} />
        <Stop offset={0.071} stopOpacity={0.2} />
        <Stop offset={0.321} stopOpacity={0.1} />
        <Stop offset={0.623} stopOpacity={0.05} />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={-1027.165}
        x2={-997.482}
        y1={147.642}
        y2={68.561}
        gradientTransform="matrix(1 0 0 -1 1075 158)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#3ccbf4" />
        <Stop offset={1} stopColor="#2892df" />
      </LinearGradient>
    </Defs>
    <Path
      fill="url(#a)"
      d="M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z"
    />
    <Path
      fill="#0078d4"
      d="M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.38z"
    />
    <Path
      fill="url(#b)"
      d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z"
    />
    <Path
      fill="url(#c)"
      d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z"
    />
  </Svg>
);
export default SvgComponent;
