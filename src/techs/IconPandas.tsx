import Svg, { Path, type SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 50 218.63 231.21" {...props}>
    <Path d="M74.88 68.42h24.09v50.02H74.88zM74.88 171.17h24.09v50.02H74.88z" />
    <Path d="M74.88 133.04h24.09v23.6H74.88z" fill="#ffca00" />
    <Path d="M36.19 109.55h24.09v166.27H36.19zM112.78 212.44h24.09v50.02h-24.09zM112.78 109.61h24.09v50.02h-24.09z" />
    <Path d="M112.78 174.23h24.09v23.6h-24.09z" fill="#e70488" />
    <Path d="M150.67 55.39h24.09v166.27h-24.09z" />
  </Svg>
);
export default SvgComponent;
