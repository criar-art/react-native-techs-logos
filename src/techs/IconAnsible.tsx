import Svg, { type SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 213.6 213.6" {...props}>
    <Path d="M213.6 106.8c0 59-47.8 106.8-106.8 106.8S0 165.8 0 106.8 47.8 0 106.8 0s106.8 47.8 106.8 106.8" />
    <Path
      d="m108.6 66.8 27.6 68.2-41.7-32.9Zm49.1 83.9L115.2 48.4c-1-2.8-3.7-4.6-6.6-4.5-3-.1-5.7 1.7-6.8 4.5L55.1 160.6h16l18.5-46.3 55.1 44.5c2.2 1.8 3.8 2.6 5.9 2.6 4.2.1 7.7-3.2 7.8-7.4v-.2c0-1-.3-2.1-.7-3.1"
      fill="#fff"
    />
  </Svg>
);
export default SvgComponent;
