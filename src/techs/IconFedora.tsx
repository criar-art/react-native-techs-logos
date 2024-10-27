import Svg, { Path, Use, type SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 267 267" {...props}>
    <Path
      fill="#294172"
      d="M266.626 133.506c0-73.525-59.604-133.13-133.128-133.13C60.007.376.426 59.93.374 133.412v103.021c.04 16.685 13.571 30.191 30.266 30.191h102.912c73.5-.029 133.074-59.613 133.074-133.118"
    />
    <Path
      id="a"
      fill="none"
      stroke="#3c6eb4"
      strokeWidth={29.21}
      d="M77.126 142.098h47.845v47.844c0 26.41-21.434 47.845-47.845 47.845-26.41 0-47.844-21.434-47.844-47.845 0-26.41 21.434-47.844 47.844-47.844z"
    />
    <Use xlinkHref="#a" transform="rotate(180 124.856 142.144)" />
    <Path
      id="b"
      fill="#fff"
      d="M139.607 127.53v62.345c0 34.504-27.975 62.48-62.48 62.48-5.235 0-8.957-.59-13.803-1.857-7.066-1.85-12.84-7.643-12.842-14.381 0-8.146 5.912-14.07 14.75-14.07 4.206 0 5.733.807 11.895.807 18.191 0 32.947-14.735 32.98-32.926V161.27a4.654 4.654 0 0 0-4.66-4.648l-21.665-.005c-8.072 0-14.594-6.438-14.594-14.532-.004-8.145 6.59-14.557 14.749-14.557"
    />
    <Use xlinkHref="#b" transform="rotate(180 124.856 142.144)" />
  </Svg>
);
export default SvgComponent;
