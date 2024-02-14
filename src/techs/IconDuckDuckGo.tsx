import Svg, { type SvgProps, Circle, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="#fff"
    aria-label="DuckDuckGo"
    viewBox="-140 -128 256 256"
    {...props}
  >
    <Circle r={108} fill="#d53" />
    <Circle r={96} fill="none" stroke="#fff" strokeWidth={7} />
    <Path
      fill="#ddd"
      d="M-32-55C-62-48-51-6-51-6l19 93 7 3M-39-73h-8l11 4s-11 0-11 7c24-1 35 5 35 5"
    />
    <Path d="M25 95S1 57 1 32c0-47 31-7 31-44S1-58 1-58c-15-19-44-15-44-15l7 4s-7 2-9 4 19-3 28 5c-37 3-31 33-31 33l21 120" />
    <Path
      fill="#fc0"
      d="m25-1 38-10c34 5-29 24-33 23C0 7 9 32 45 24s9 20-24 9C-26 20-1-3 25-1"
    />
    <Path
      fill="#6b5"
      d="m15 78 2-3c22 8 23 11 22-9s0-20-23-3c0-5-13-3-15 0-21-9-23-12-22 2 2 29 1 24 21 14"
    />
    <Path fill="#4a4" d="M-1 67v12c1 2 17 2 17-2s-8 3-13 1-2-13-2-13" />
    <Path
      fill="#148"
      d="M-23-32c-5-6-18-1-15 7 1-4 8-10 15-7m32 0c1-6 11-7 14-1-4-2-10-2-14 1m-33 16a2 2 0 1 1 0 1m-8 3a7 7 0 1 0 0-1m52-6a2 2 0 1 1 0 1m-6 3a6 6 0 1 0 0-1"
    />
  </Svg>
);
export default SvgComponent;
