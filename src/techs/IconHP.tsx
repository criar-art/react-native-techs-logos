import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg aria-label="HP" viewBox="0 0 512 512" {...props}>
    <Path
      fill="#0096d6"
      d="M256 64c-2.9 0-5.8 0-8.6.2l-39.3 108h34.2c20.3 0 31.3 15.6 24.3 34.8l-48.4 133h-40.7l52-142.6H199L147 340h-40.6l61-168 36.9-101a192 192 0 0 0 7.2 371.7l35.7-98L310 172h75c20.3 0 31.3 15.7 24.3 34.9l-42.5 116.9a26.5 26.5 0 0 1-23.2 16.2h-54l-39.2 107.8 5.7.1a192 192 0 0 0 0-384zm85.6 133.3-42.8 117.4h30.6l42.8-117.4z"
    />
  </Svg>
);
export default SvgComponent;
