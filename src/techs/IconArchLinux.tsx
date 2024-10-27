import Svg, { Path, type SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg aria-label="Arch Linux" viewBox="0 0 512 412" {...props}>
    <Path
      fill="#1793d1"
      d="M256 72c-14 35-23 57-39 91 10 11 22 23 41 36-21-8-35-17-45-26-21 43-53 103-117 220 50-30 90-48 127-55-2-7-3-14-3-22v-1c1-33 18-58 38-56 20 1 36 29 35 62l-2 17c36 7 75 26 125 54l-27-50c-13-10-27-23-55-38 19 5 33 11 44 17-86-159-93-180-122-250z"
    />
  </Svg>
);
export default SvgComponent;
