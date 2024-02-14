import Svg, { type SvgProps, Defs, Path, Use } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg aria-label="TikTok" viewBox="0 0 512 512" {...props}>
    <Defs>
      <Path
        id="a"
        d="M219 200a117 117 0 1 0 101 115V187a150 150 0 0 0 88 28v-63a88 88 0 0 1-88-88h-64v252a54 54 0 1 1-37-51z"
      />
    </Defs>
    <Use x={18} y={15} fill="#f05" href="#a" />
    <Use fill="#0ee" href="#a" />
  </Svg>
);
export default SvgComponent;
