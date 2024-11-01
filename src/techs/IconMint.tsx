import Svg, { Circle, Path, type SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Circle cx={128} cy={128} r={118} fill="#69b53f" />
    <Path
      fill="#f8f8f8"
      d="M58 63v90c0 21.973 18.027 40 40 40h60c21.973 0 40-18.027 40-40v-50c0-16.45-13.55-30-30-30-7.685 0-14.667 3.038-20 7.866C142.667 76.038 135.685 73 128 73c-16.45 0-30 13.55-30 30v50h20v-50c0-5.641 4.359-10 10-10s10 4.359 10 10v50h20v-50c0-5.641 4.359-10 10-10s10 4.359 10 10v50c0 11.164-8.836 20-20 20H98c-11.164 0-20-8.836-20-20V63Z"
    />
  </Svg>
);
export default SvgComponent;
