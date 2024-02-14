import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path
      d="M16 2 2.966 6.648l1.988 17.234L16 30l11.046-6.118 1.988-17.234L16 2z"
      fill="#dd0031"
    />
    <Path
      d="M16 2v3.108-.014V30l11.046-6.118 1.988-17.234L16 2z"
      fill="#c3002f"
    />
    <Path
      d="m16 5.094-8.148 18.27h3.038l1.638-4.088h6.916l1.638 4.088h3.038L16 5.094Zm2.38 11.662h-4.76L16 11.03Z"
      fill="#fff"
    />
  </Svg>
);
export default SvgComponent;
