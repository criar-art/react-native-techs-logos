import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg preserveAspectRatio="xMidYMid" viewBox="0 -29 256 256" {...props}>
    <Path
      fill="#429F87"
      d="m154.565 138.602 39.246 58.547h62.043l-70.31-103.883-30.979 45.336M29.492 169.994l28.736-27.07 45.942 54.225L74.678 88.375l-24.9 40.962-20.286 40.657"
    />
    <Path
      fill="#56C5A8"
      d="m29.492 169.994 45.186-81.62-28.728 27.084L0 61.23l29.492 108.764M249.938.603h-62.043l-37.999 56.144V.603H92.985v58.229l30.344 111.834 7.071 26.483h19.496v-49.138L249.938.603"
    />
  </Svg>
);
export default SvgComponent;
