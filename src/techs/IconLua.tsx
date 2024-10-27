import Svg, { type SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 947 947" {...props}>
    <Path
      fill="navy"
      d="M835.5 473.6c0-199.8-162.2-362-362-362s-362 162.2-362 362 162.2 362 362 362 362-162.2 362-362"
    />
    <Path
      fill="#FFF"
      d="M729.5 323.6c0-58.5-47.5-106-106-106s-106 47.5-106 106 47.5 106 106 106 106-47.5 106-106"
    />
    <Path
      fill="navy"
      d="M941.5 111.5c0-58.5-47.5-106-106-106s-106 47.5-106 106 47.5 106 106 106 106-47.4 106-106"
    />
    <Path
      fill="#FFF"
      d="M258.1 627.8h117.3v26.7H227.8V417h30.3v210.8zm257.4 26.7v-23.8c-16 22.5-31.9 31.3-57 31.3-33.2 0-54.4-18.2-54.4-46.6V483.8h27v120.9c0 20.5 13.7 33.6 35.2 33.6 28.3 0 46.6-22.8 46.6-57.7v-96.8h27v170.7h-24.4zm222.9 4.6c-8.8 2.3-13 2.9-18.6 2.9-17.6 0-26.1-7.8-28-25.1-19.2 17.6-36.5 25.1-58 25.1-34.5 0-56-19.5-56-50.5 0-22.2 10.1-37.5 30-45.6 10.4-4.2 16.3-5.5 54.7-10.4 21.5-2.6 28.3-7.5 28.3-18.9v-7.2c0-16.3-13.7-25.4-38.1-25.4-25.4 0-37.8 9.4-40.1 30.3h-27.4c.7-16.9 3.9-26.7 11.7-35.5 11.4-12.7 31.9-19.9 56.7-19.9 42 0 64.2 16.3 64.2 46.6v100.4c0 8.5 5.2 13.4 14.7 13.4 1.6 0 2.9 0 5.9-.7v20.5zm-47.6-89c-9.1 4.2-15 5.5-43.7 9.4-29 4.2-41.1 13.4-41.1 31.3 0 17.3 12.4 27.4 33.6 27.4 16 0 29.3-5.2 40.4-15.3 8.1-7.5 10.8-13 10.8-22.2v-30.6z"
    />
    <Path
      fill="none"
      stroke="gray"
      strokeDasharray={40.847}
      strokeMiterlimit={10}
      strokeWidth={10.861}
      d="M890.6 261c33.5 65.8 51 138.6 51 212.5 0 258.4-209.7 468.1-468.1 468.1S5.4 731.9 5.4 473.5C5.4 215.1 215.1 5.4 473.5 5.4c83.1 0 164.6 22.1 236.2 63.9"
    />
  </Svg>
);
export default SvgComponent;