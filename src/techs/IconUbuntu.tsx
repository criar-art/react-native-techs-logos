import Svg, { Circle, G, Path, Use, type SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" {...props}>
    <Circle cx={50} cy={50} r={45} fill="#f47421" />
    <Circle
      cx={50}
      cy={50}
      r={21.825}
      fill="none"
      stroke="#fff"
      strokeWidth={8.55}
    />
    <G id="a">
      <Circle cx={19.4} cy={50} r={8.438} fill="#f47421" />
      <Path stroke="#f47421" strokeWidth={3.238} d="M67 50h10" />
      <Circle cx={19.4} cy={50} r={6.007} fill="#fff" />
    </G>
    <Use xlinkHref="#a" transform="rotate(120 50 50)" />
    <Use xlinkHref="#a" transform="rotate(240 50 50)" />
  </Svg>
);
export default SvgComponent;
