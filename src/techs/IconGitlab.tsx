import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fillRule="evenodd" viewBox="0 0 64 64" {...props}>
    <Path fill="#e24329" d="M32 61.477 43.784 25.2H20.216z" />
    <Path fill="#fc6d26" d="M32 61.477 20.216 25.2H3.7z" />
    <Path
      fill="#fca326"
      d="M3.7 25.2.12 36.23a2.44 2.44 0 0 0 .886 2.728L32 61.477z"
    />
    <Path
      fill="#e24329"
      d="M3.7 25.2h16.515L13.118 3.366c-.365-1.124-1.955-1.124-2.32 0z"
    />
    <Path fill="#fc6d26" d="M32 61.477 43.784 25.2H60.3z" />
    <Path
      fill="#fca326"
      d="m60.3 25.2 3.58 11.02a2.44 2.44 0 0 1-.886 2.728L32 61.477z"
    />
    <Path
      fill="#e24329"
      d="M60.3 25.2H43.784l7.098-21.844c.365-1.124 1.955-1.124 2.32 0z"
    />
  </Svg>
);
export default SvgComponent;
