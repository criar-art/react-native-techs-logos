import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="#0061ff" aria-label="Dropbox" viewBox="0 0 512 512" {...props}>
    <Path d="m158 101-99 63 295 188 99-63m-99-188 99 63-295 188-99-63m99 83 98 63 98-63-98-62z" />
  </Svg>
);
export default SvgComponent;
