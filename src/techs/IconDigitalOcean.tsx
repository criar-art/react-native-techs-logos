import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg aria-label="DigitalOcean" viewBox="0 0 512 512" {...props}>
    <Path
      fill="#0080ff"
      d="M78 373v-47h47v104h57V300h74v147A191 191 0 1 0 65 256h74a117 117 0 1 1 117 117"
    />
  </Svg>
);
export default SvgComponent;
