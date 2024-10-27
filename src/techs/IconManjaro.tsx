import Svg, { type SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 10 345.45 219.5" {...props}>
    <Path
      fill="#35bfa4"
      fillRule="evenodd"
      d="M90.909 72.727a18.142 18.142 0 0 0-18.182 18.182v163.64a18.142 18.142 0 0 0 18.182 18.182h36.364v-145.45H200V72.736zm127.27 0v200h36.364a18.142 18.142 0 0 0 18.182-18.182V90.905a18.142 18.142 0 0 0-18.182-18.182zm-72.727 72.727v127.27h54.545v-127.27z"
    />
  </Svg>
);
export default SvgComponent;
