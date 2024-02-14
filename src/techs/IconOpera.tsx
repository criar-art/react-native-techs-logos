import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg aria-label="Opera" viewBox="0 0 512 512" {...props}>
    <Path
      fill="#ff1b2d"
      d="M185.2 377.2c-23.7-28-39.1-69.6-40.2-116.1v-10.2c1-46.5 16.5-88 40.2-116 30.9-40.1 76.7-65.5 128-65.5 31.4 0 60.9 9.6 86 26.3A214.2 214.2 0 0 0 256.9 41h-.8a215 215 0 1 0 143.3 375.3 155.1 155.1 0 0 1-86.2 26.3c-51.2 0-97-25.4-127.9-65.4"
    />
    <Path
      fill="#a70014"
      d="M185.2 134.8c19.7-23.2 45.2-37.3 73-37.3 62.7 0 113.4 71 113.4 158.5s-50.7 158.5-113.3 158.5c-27.9 0-53.3-14-73-37.3 30.8 40 76.6 65.4 127.8 65.4 31.5 0 61-9.6 86.2-26.3 44-39.4 71.7-96.6 71.7-160.3 0-63.7-27.7-121-71.7-160.3A155.1 155.1 0 0 0 313 69.4c-51.2 0-97 25.4-127.9 65.4"
    />
  </Svg>
);
export default SvgComponent;
